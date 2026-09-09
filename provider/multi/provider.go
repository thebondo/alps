package multi

import (
	"os"
	"log"
	"fmt"
	"strings"
	"strconv"
	"errors"
	"encoding/json"
	"github.com/emersion/go-message"
	"github.com/migadu/alps/provider"
	"github.com/migadu/alps/provider/imap"
)

const multiDelimiter = '#'
var multiDelimiterString = string(multiDelimiter)

var unifiedFolderList = []string{ "INBOX" }
//var unifiedFolderList = []string{ }

var ErrInvalidAccount = fmt.Errorf("Invalid account name")
var ErrInvalidMailbox = fmt.Errorf("Invalid mailbox name")

type MultipleAccountProvider struct {
	path         string
	config       *userConfig
	accountOrder []string
	accountMap   map[string]*account
	unifiedOrder []string
	unifiedMap   map[string]int
}

func NewProvider(path string) (provider.MailProvider, error) {

	content, err := os.ReadFile(path)
	if err != nil {
		return nil, fmt.Errorf("failed to read config file: %w", err)
	}

	var cfg userConfig
	err = json.Unmarshal(content, &cfg)
	if err != nil {
		return nil, fmt.Errorf("failed to parse JSON data: %w", err)
	}
	if cfg.Settings == nil {
		cfg.Settings = make(map[string]json.RawMessage)
	}

	alist := []string{}
	amap := make(map[string]*account)

	for i, c := range cfg.Accounts {
		if err := c.check(); err != nil {
			log.Printf("provider/multi: invalid account config: %w", err)
			continue
		}
		key := "@" + c.Name
		if _, ok := amap[key]; ok {
			log.Printf("provider/multi: account %d has duplicate name %s", i, c.Name)
			continue
		}
		a, err := newAccount(c)
		if err != nil {
			log.Printf("provider/multi: connect failed for %s: %s", c.Name, err)
			continue
		}
		alist = append(alist, key)
		amap[key] = a
	}

	ulist := []string{}
	umap := make(map[string]int)
	for i, name := range unifiedFolderList {
		ulist = append(ulist, name)
		umap[name] = i
	}

	return &MultipleAccountProvider{
		path: path,
		config: &cfg,
		accountOrder: alist,
		accountMap: amap,
		unifiedOrder: ulist,
		unifiedMap: umap,
	}, nil
}

// map an account and mailbox name to a virtual mailbox name
func (p *MultipleAccountProvider) mapAccountMailboxToVirtual(a *account, name string) string {

	parts := strings.Split(name, a.d)

/*
	if parts[0] == "INBOX" {
		if len(parts) == 1 {
			return "INBOX" + multiDelimiterString + a.c.Name
		} else {
			return "INBOX" + multiDelimiterString + a.c.Name + multiDelimiterString + strings.Join(parts[1:], multiDelimiterString)
		}
	} else {
		return a.c.Name + multiDelimiterString + strings.Join(parts, multiDelimiterString)
	}
*/
	return "@" + a.c.Name + multiDelimiterString + strings.Join(parts, multiDelimiterString)
}

// map a virtual mailbox name to an account and mailbox name
func (p *MultipleAccountProvider) mapVirtualMailboxToAccount(name string) (*account, string, error) {

	parts := strings.Split(name, multiDelimiterString)
	n := len(parts)

	if n == 1 {
		return nil, "", ErrInvalidMailbox
	}

	accountKey := parts[0]
	a, ok := p.accountMap[accountKey]
	if !ok {
		return nil, "", ErrInvalidAccount
	}
	return a, strings.Join(parts[1:], a.d), nil

/*
	if parts[0] == "INBOX" {
		accountName := parts[1]
		a, ok := p.accountMap[accountName]
		if !ok {
			return nil, "", ErrInvalidAccount
		}
		if n == 2 {
			return a, "INBOX", nil
		} else {
			return a, "INBOX" + a.d + strings.Join(parts[2:], a.d), nil
		}
	} else {
		accountName := parts[0]
		a, ok := p.accountMap[accountName]
		if !ok {
			return nil, "", ErrInvalidAccount
		}
		return a, strings.Join(parts[1:], a.d), nil
	}
*/
}

func (p *MultipleAccountProvider) saveSettings() {

	b, err := json.MarshalIndent(p.config, "", "   ")
	if err != nil {
		log.Printf("provider/multi: save settings marshal failed: %s", err)
		return
	}
	err = os.WriteFile(p.path, b, 0644)
	if err != nil {
		log.Printf("provider/multi: save settings write failed: %s", err)
		return
	}
}

func (p *MultipleAccountProvider) Get(key string, out interface{}) error {

	raw, ok := p.config.Settings[key]
	if !ok || raw == nil || len(raw) == 0 || string(raw) == "NIL" {
		return provider.ErrNoStoreEntry
	}
	if err := json.Unmarshal(raw, out); err != nil {
		log.Printf("provider/multi: ignoring invalid store entry %q (err: %v)", key, err)
		return provider.ErrNoStoreEntry
	}
	return nil
}

func (p *MultipleAccountProvider) Put(key string, v interface{}) error {

	if v != nil {
		log.Printf("provider/multi: attempt to set setting %s", key)
		b, err := json.MarshalIndent(v, "   ", "   ")
		if err != nil {
			return fmt.Errorf("provider/multi: failed to marshal unified store entry %q: %v", key, err)
		}
		p.config.Settings[key] = json.RawMessage(b)
	} else {
		log.Printf("provider/multi: attempt to clear setting %s", key)
		delete(p.config.Settings, key)
	}
	p.saveSettings()
	return nil
}


// GetStore returns the per-user store for this provider
func (p *MultipleAccountProvider) GetStore() (provider.Store, error) {

	return p, nil
}

// Close closes all the child providers
func (p *MultipleAccountProvider) Close() error {
	var errs []error
	for _, key := range p.accountOrder {
		tmp := p.accountMap[key].p.Close()
		if tmp != nil {
			errs = append(errs, tmp)
		}
	}
	if len(errs) > 0 {
		return errors.Join(errs...)
	}
	return nil
}

// ListMailboxes returns all mailboxes
func (p *MultipleAccountProvider) ListMailboxes() ([]provider.Mailbox, error) {

	var mailboxes []provider.Mailbox

	for _, name := range p.unifiedOrder {
		mbox := provider.Mailbox{
			Name: name,
			Delimiter: multiDelimiter,
			Attributes: nil,
			Total: -1,
			Unseen: -1,
			Subscribed: false,
		}
		mailboxes = append(mailboxes, mbox)
	}

	for _, key := range p.accountOrder {
		a := p.accountMap[key]
		tmp, err := a.p.ListMailboxes()
		if err != nil {
			continue
		}
		for _, mbox := range tmp {
			mbox.Name = p.mapAccountMailboxToVirtual(a, mbox.Name)
			mbox.Delimiter = multiDelimiter
			mailboxes = append(mailboxes, mbox)
		}
	}
	for i, x := range mailboxes {
		fmt.Printf("Virtual mailbox %d = %s (%s)\n", i, x.Name, strings.Join(x.Attributes, ", "))
	}
	return mailboxes, nil
}

// GetMailboxStatus returns status for a specific mailbox
func (p *MultipleAccountProvider) GetMailboxStatus(vMbox string) (*provider.MailboxStatus, error) {

	if vMbox == "INBOX" {
		return &provider.MailboxStatus{
			Name:        "INBOX",
			NumMessages: 0,
			NumUnseen:   0,
			UIDValidity: 0,
		}, nil
	}
	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, err }
	status, err := a.p.GetMailboxStatus(aMbox)
	if err != nil { return nil, err }
	status.Name = p.mapAccountMailboxToVirtual(a, status.Name)
	return status, nil
}

// FindMailboxByType finds a mailbox by its type (Sent, Drafts, etc.)
func (p *MultipleAccountProvider) FindMailboxByType(mboxType provider.MailboxType) (*provider.Mailbox, error) {

	return nil, nil
}

// CreateMailbox creates a new mailbox
func (p *MultipleAccountProvider) CreateMailbox(vMbox string) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	return a.p.CreateMailbox(aMbox)
}

// DeleteMailbox deletes a mailbox
func (p *MultipleAccountProvider) DeleteMailbox(vMbox string) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	return a.p.DeleteMailbox(aMbox)
}

// EmptyMailbox empties a mailbox by deleting all its messages
func (p *MultipleAccountProvider) EmptyMailbox(vMbox string) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	return a.p.EmptyMailbox(aMbox)
}

// RenameMailbox renames a mailbox
func (p *MultipleAccountProvider) RenameMailbox(oldVirtualMailbox, newVirtualMailbox string) error {

	a, oldSourceMailbox, err := p.mapVirtualMailboxToAccount(oldVirtualMailbox)
	if err != nil { return err }
	aCheck, newSourceMailbox, err := p.mapVirtualMailboxToAccount(newVirtualMailbox)
	if err != nil { return err }
	if aCheck != a {
		return fmt.Errorf("cannot rename across accounts")
	}
	return a.p.RenameMailbox(oldSourceMailbox, newSourceMailbox)
}

// SubscribeMailbox subscribes to a mailbox
func (p *MultipleAccountProvider) SubscribeMailbox(vMbox string) error {

	if vMbox == "INBOX" { return nil }

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	return a.p.SubscribeMailbox(aMbox)
}

// UnsubscribeMailbox unsubscribes from a mailbox
func (p *MultipleAccountProvider) UnsubscribeMailbox(vMbox string) error {

	if vMbox == "INBOX" { return nil }

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	return a.p.UnsubscribeMailbox(aMbox)
}

// ListMessages returns a paginated list of messages
func (p *MultipleAccountProvider) ListMessages(vMbox string, sortOrder string, page, pageSize int) ([]provider.Message, int, error) {

	if vMbox == "INBOX" {
		return nil, 0, nil
	}

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, 0, err }

	list, count, err := a.p.ListMessages(aMbox, sortOrder, page, pageSize)
	if err != nil { return nil, 0, err }
	n := len(list)
	for i := 0; i < n; i ++ {
		list[i].Mailbox = p.mapAccountMailboxToVirtual(a, list[i].Mailbox)
	}
	return list, count, nil
}

// SearchMessages searches messages in a mailbox
func (p *MultipleAccountProvider) SearchMessages(vMbox, query string, sortOrder string, page, pageSize int) ([]provider.Message, int, error) {

	if vMbox == "INBOX" {
		return nil, 0, nil
	}

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, 0, err }
	list, count, err := a.p.SearchMessages(aMbox, query, sortOrder, page, pageSize)
	if err != nil { return nil, 0, err }
	n := len(list)
	for i := 0; i < n; i ++ {
		list[i].Mailbox = p.mapAccountMailboxToVirtual(a, list[i].Mailbox)
	}
	return list, count, nil
}

func (p *MultipleAccountProvider) ParseMessageID(id string) (provider.MessageID, error) {

	uid, err := strconv.ParseUint(id, 10, 32)
	if err != nil {
		return nil, fmt.Errorf("invalid Unified UID format: %v", err)
	}
	return imap.IMAPUID(uid), nil
}

// GetMessageMetadata fetches a message's metadata without downloading any body parts
func (p *MultipleAccountProvider) GetMessageMetadata(vMbox string, id provider.MessageID) (*provider.Message, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, err }
	msg, err := a.p.GetMessageMetadata(aMbox, id)
	if err != nil { return nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, nil
}

// GetMessagePart fetches a message part
func (p *MultipleAccountProvider) GetMessagePart(vMbox string, id provider.MessageID, partPath []int) (*provider.Message, *message.Entity, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, nil, err }
	msg, ent, err := a.p.GetMessagePart(aMbox, id, partPath)
	if err != nil { return nil, nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, ent, nil
}

// GetMessagePartRaw fetches a message part's raw bytes
func (p *MultipleAccountProvider) GetMessagePartRaw(vMbox string, id provider.MessageID, partPath []int, limit int64) (*provider.Message, []byte, []byte, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, nil, nil, err }
	msg, b1, b2, err := a.p.GetMessagePartRaw(aMbox, id, partPath, limit)
	if err != nil { return nil, nil, nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, b1, b2, nil
}

// GetMessagePartWithData fetches a message part with both entity and raw data
func (p *MultipleAccountProvider) GetMessagePartWithData(vMbox string, id provider.MessageID, partPath []int) (*provider.Message, *message.Entity, []byte, []byte, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, nil, nil, nil, err }
	msg, e, b1, b2, err := a.p.GetMessagePartWithData(aMbox, id, partPath)
	if err != nil { return nil, nil, nil, nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, e, b1, b2, nil
}

// SetMessagesFlags sets flags for multiple messages
func (p *MultipleAccountProvider) SetMessagesFlags(vMbox string, ids []provider.MessageID, op provider.FlagOperation) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	return a.p.SetMessagesFlags(aMbox, ids, op)
}

// MarkAnswered marks a message as answered
func (p *MultipleAccountProvider) MarkAnswered(vMbox string, id provider.MessageID) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	return a.p.MarkAnswered(aMbox, id)
}

// AppendMessage appends a message to a mailbox and returns the UID
func (p *MultipleAccountProvider) AppendMessage(vMbox string, msg provider.OutgoingMessageWriter, mboxType provider.MailboxType) (*provider.Mailbox, provider.MessageID, uint32, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, nil, 0, err }
	mbox, mid, count, err := a.p.AppendMessage(aMbox, msg, mboxType)
	if err != nil { return nil, nil, 0, err }
	mbox.Name = p.mapAccountMailboxToVirtual(a, mbox.Name)
	mbox.Delimiter = multiDelimiter
	return mbox, mid, count, nil
}

// DeleteMessages deletes multiple messages
func (p *MultipleAccountProvider) DeleteMessages(vMbox string, ids []provider.MessageID) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	return a.p.DeleteMessages(aMbox, ids)
}

// MoveMessages moves multiple messages between mailboxes
func (p *MultipleAccountProvider) MoveMessages(srcVirtualMailbox, dstVirtualMailbox string, ids []provider.MessageID) (map[provider.MessageID]provider.MessageID, error) {

	a, srcSourceMailbox, err := p.mapVirtualMailboxToAccount(srcVirtualMailbox)
	if err != nil { return nil, err }

	aCheck, dstSourceMailbox, err := p.mapVirtualMailboxToAccount(dstVirtualMailbox)
	if err != nil { return nil, err }

	if aCheck != a {
		return nil, fmt.Errorf("move between accounts not supported yet")
	}

	return a.p.MoveMessages(srcSourceMailbox, dstSourceMailbox, ids)
}

// CopyMessages copies messages to another mailbox
func (p *MultipleAccountProvider) CopyMessages(srcVirtualMailbox, dstVirtualMailbox string, ids []provider.MessageID) (map[provider.MessageID]provider.MessageID, error) {

	a, srcSourceMailbox, err := p.mapVirtualMailboxToAccount(srcVirtualMailbox)
	if err != nil { return nil, err }

	aCheck, dstSourceMailbox, err := p.mapVirtualMailboxToAccount(dstVirtualMailbox)
	if err != nil { return nil, err }

	if aCheck != a {
		return nil, fmt.Errorf("copy between accounts not supported yet")
	}

	return a.p.CopyMessages(srcSourceMailbox, dstSourceMailbox, ids)
}

func (p *MultipleAccountProvider) HasThreadCapability() bool {

	return false
}

func (p *MultipleAccountProvider) HasESearchCapability() bool {

	return false
}
