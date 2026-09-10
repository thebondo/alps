package multi

import (
	"io"
	"fmt"
	"sync"
	"time"
	"errors"
	"strings"
	"context"
	"github.com/emersion/go-message"
	"github.com/migadu/alps/provider"
	"github.com/migadu/alps/provider/imap"
)

const retryLimit = 3
const retryWait = 1 * time.Second

var ErrAccountUnavailable = errors.New("account not available")

func isNetworkError(err error) bool {
	if err == nil {
		return false
	}
	if errors.Is(err, io.EOF) || errors.Is(err, io.ErrUnexpectedEOF) {
		return true
	}
	errStr := err.Error()
	return strings.Contains(errStr, "use of closed network connection") ||
		strings.Contains(errStr, "connection reset") ||
		strings.Contains(errStr, "broken pipe")
}

func closeProviderAfter(p provider.MailProvider, done <-chan error) {
	if p == nil {
		return
	}
	go func() {
		<-done
		p.Close()
	}()
}

type account struct {
	config *accountConfig
	store provider.Store
	plock sync.Mutex
	backend provider.MailProvider
	delim string
	debug bool
}

func newAccount(cfg *accountConfig, s provider.Store, debug bool) (*account, error) {

	a := &account{
		config: cfg,
		store: s,
		backend: nil,
		delim: ".",
		debug: debug,
	}

	err := a.connect()
	if err != nil {
		return nil, err
	}
	return a, nil
}

func (a *account) connect() error {

	tls := true
	insecure := false
	timeout := 30*time.Second
	client, err := imap.Connect(a.config.Server, tls, insecure, timeout, a.debug)
	if err != nil { return err }

	cmd := client.Login(a.config.Username, a.config.Password)
	err = cmd.Wait()
	if err != nil {
		client.Logout()
		return err
	}

	ip := imap.NewIMAPProvider(client, a.debug)
	if a.store != nil {
		ip.SetStore(a.store)
	}
	a.backend = ip
	return nil
}


func (a *account) doWithProvider(f func(provider.MailProvider) error) error {

	return a.doWithProviderContext(context.Background(), f)
}

func (a *account) doWithProviderContext(ctx context.Context, f func(provider.MailProvider) error) error {

	a.plock.Lock()
	defer a.plock.Unlock()

	count := 0
	for {
		if a.backend == nil {
			err := a.connect()
			if err != nil {
				return fmt.Errorf("failed to connect to %s: %w", a.config.Name, errors.Join(ErrAccountUnavailable, err))
			}
		}

		done := make(chan error, 1)

		go func(p provider.MailProvider) {
			defer func() {
				if r := recover(); r != nil {
					done <- fmt.Errorf("panic in IMAP operation: %v", r)
				}
			}()
			done <- f(p)
		}(a.backend)

		var err error
		select {
		case <-ctx.Done():
			closeProviderAfter(a.backend, done)
			a.backend = nil
			return fmt.Errorf("context cancelled: %w", ctx.Err())
		case err = <-done:
		}

		if err != nil && isNetworkError(err) {
			a.backend.Close()
			a.backend = nil
			count = count + 1
			if count <= retryLimit {
				time.Sleep(retryWait)
				continue
			}
		}

		return err
	}
}

func (a *account) Close() error {

	if a.backend == nil { return nil }
	err := a.backend.Close()
	a.backend = nil
	return err
}

func (a *account) ListMailboxes() ([]provider.Mailbox, error) {

	var result []provider.Mailbox = nil
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		result, perr = p.ListMailboxes()
		return perr
	})
	return result, err
}

func (a *account) GetMailboxStatus(mailbox string) (*provider.MailboxStatus, error) {

	var status *provider.MailboxStatus = nil
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		status, perr = p.GetMailboxStatus(mailbox)
		return perr
	})
	return status, err
}

func (a *account) FindMailboxByType(mboxType provider.MailboxType) (*provider.Mailbox, error) {

	return nil, nil
}

func (a *account) CreateMailbox(mailbox string) error {

	return a.doWithProvider(func(p provider.MailProvider) error {
		return p.CreateMailbox(mailbox)
	})
}

func (a *account) DeleteMailbox(mailbox string) error {

	return a.doWithProvider(func(p provider.MailProvider) error {
		return p.DeleteMailbox(mailbox)
	})
}

func (a *account) EmptyMailbox(mailbox string) error {

	return a.doWithProvider(func(p provider.MailProvider) error {
		return p.EmptyMailbox(mailbox)
	})
}

func (a *account) RenameMailbox(oldName, newName string) error {

	return a.doWithProvider(func(p provider.MailProvider) error {
		return p.RenameMailbox(oldName, newName)
	})
}

func (a *account) SubscribeMailbox(mailbox string) error {

	return a.doWithProvider(func(p provider.MailProvider) error {
		return p.SubscribeMailbox(mailbox)
	})
}

func (a *account) UnsubscribeMailbox(mailbox string) error {

	return a.doWithProvider(func(p provider.MailProvider) error {
		return p.UnsubscribeMailbox(mailbox)
	})
}

func (a *account) ListMessages(mailbox string, sortOrder string, page, pageSize int) ([]provider.Message, int, error) {

	var list []provider.Message = nil
	var count int = 0
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		list, count, perr = p.ListMessages(mailbox, sortOrder, page, pageSize)
		return perr
	})
	return list, count, err
}

func (a *account) SearchMessages(mailbox, query string, sortOrder string, page, pageSize int) ([]provider.Message, int, error) {

	var list []provider.Message = nil
	var count int = 0
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		list, count, perr = p.SearchMessages(mailbox, query, sortOrder, page, pageSize)
		return perr
	})
	return list, count, err
}

func (a *account) GetMessageMetadata(mailbox string, id provider.MessageID) (*provider.Message, error) {

	var msg *provider.Message = nil
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		msg, perr = p.GetMessageMetadata(mailbox, id)
		return perr
	})
	return msg, err
}

func (a *account) GetMessagePart(mailbox string, id provider.MessageID, partPath []int) (*provider.Message, *message.Entity, error) {

	var m *provider.Message = nil
	var e *message.Entity = nil
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		m, e, perr = p.GetMessagePart(mailbox, id, partPath)
		return perr
	})
	return m, e, err
}

func (a *account) GetMessagePartRaw(mailbox string, id provider.MessageID, partPath []int, limit int64) (*provider.Message, []byte, []byte, error) {

	var m *provider.Message = nil
	var b1 []byte = nil
	var b2 []byte = nil
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		m, b1, b2, perr = p.GetMessagePartRaw(mailbox, id, partPath, limit)
		return perr
	})
	return m, b1, b2, err
}

func (a *account) GetMessagePartWithData(mailbox string, id provider.MessageID, partPath []int) (*provider.Message, *message.Entity, []byte, []byte, error) {

	var m *provider.Message = nil
	var e *message.Entity = nil
	var b1 []byte = nil
	var b2 []byte = nil
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		m, e, b1, b2, perr = p.GetMessagePartWithData(mailbox, id, partPath)
		return perr
	})
	return m, e, b1, b2, err
}

func (a *account) SetMessagesFlags(mailbox string, ids []provider.MessageID, op provider.FlagOperation) error {

	return a.doWithProvider(func(p provider.MailProvider) error {
		return p.SetMessagesFlags(mailbox, ids, op)
	})
}

func (a *account) MarkAnswered(mailbox string, id provider.MessageID) error {

	return a.doWithProvider(func(p provider.MailProvider) error {
		return p.MarkAnswered(mailbox, id)
	})
}

func (a *account) AppendMessage(mailbox string, msg provider.OutgoingMessageWriter, mboxType provider.MailboxType) (*provider.Mailbox, provider.MessageID, uint32, error) {

	var m *provider.Mailbox = nil
	var id provider.MessageID = nil
	var n uint32 = 0
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		m, id, n, perr = p.AppendMessage(mailbox, msg, mboxType)
		return perr
	})
	return m, id, n, err
}

func (a *account) DeleteMessages(mailbox string, ids []provider.MessageID) error {

	return a.doWithProvider(func(p provider.MailProvider) error {
		return p.DeleteMessages(mailbox, ids)
	})
}

func (a *account) MoveMessages(oldMailbox, newMailbox string, ids []provider.MessageID) (map[provider.MessageID]provider.MessageID, error) {

	var m map[provider.MessageID]provider.MessageID = nil
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		m, perr = p.MoveMessages(oldMailbox, newMailbox, ids)
		return perr
	})
	return m, err
}

func (a *account) CopyMessages(oldMailbox, newMailbox string, ids []provider.MessageID) (map[provider.MessageID]provider.MessageID, error) {

	var m map[provider.MessageID]provider.MessageID = nil
	err := a.doWithProvider(func(p provider.MailProvider) error {
		var perr error
		m, perr = p.CopyMessages(oldMailbox, newMailbox, ids)
		return perr
	})
	return m, err
}

