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

type fileStore struct {
	path string
	cache *userConfig
}

func newFileStore(path string) (*fileStore, error) {

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

	return &fileStore {
		path: path,
		cache: &cfg,
	}, nil
}

func (s *fileStore) accounts() []*accountConfig {

	return s.cache.Accounts
}

func (f *fileStore) saveSettings() {

	b, err := json.MarshalIndent(f.cache, "", "   ")
	if err != nil {
		log.Printf("provider/multi: save settings marshal failed: %s", err)
		return
	}
	err = os.WriteFile(f.path, b, 0644)
	if err != nil {
		log.Printf("provider/multi: save settings write failed: %s", err)
		return
	}
}

func (f *fileStore) Get(key string, out interface{}) error {

	raw, ok := f.cache.Settings[key]
	if !ok || raw == nil || len(raw) == 0 || string(raw) == "NIL" {
		return provider.ErrNoStoreEntry
	}
	if err := json.Unmarshal(raw, out); err != nil {
		log.Printf("provider/multi: ignoring invalid store entry %q (err: %v)", key, err)
		return provider.ErrNoStoreEntry
	}
	return nil
}

func (f *fileStore) Put(key string, v interface{}) error {

	if v != nil {
		log.Printf("provider/multi: attempt to set setting %s", key)
		b, err := json.MarshalIndent(v, "   ", "   ")
		if err != nil {
			return fmt.Errorf("provider/multi: failed to marshal unified store entry %q: %v", key, err)
		}
		f.cache.Settings[key] = json.RawMessage(b)
	} else {
		log.Printf("provider/multi: attempt to clear setting %s", key)
		delete(f.cache.Settings, key)
	}
	f.saveSettings()
	return nil
}

type MultipleAccountProvider struct {
	store        *fileStore
	accountOrder []string
	accountMap   map[string]*account
	unifiedOrder []string
	unifiedMap   map[string]int
}

// map an account and mailbox name to a virtual mailbox name
func (p *MultipleAccountProvider) mapAccountMailboxToVirtual(a *account, name string) string {

	if name == "" {
		return "@" + a.c.Name
	}
	parts := strings.Split(name, a.d)
	return "@" + a.c.Name + multiDelimiterString + strings.Join(parts, multiDelimiterString)
}

// map a virtual mailbox name to an account and mailbox name
func (p *MultipleAccountProvider) mapVirtualMailboxToAccount(name string) (*account, string, error) {

	parts := strings.Split(name, multiDelimiterString)
	n := len(parts)

	accountKey := parts[0]
	a, ok := p.accountMap[accountKey]
	if !ok {
		return nil, "", ErrInvalidAccount
	}
	if n == 1 {
		return a, "", nil
	} else {
		return a, strings.Join(parts[1:], a.d), nil
	}
}

// GetStore returns the per-user store for this provider
func (p *MultipleAccountProvider) GetStore() (provider.Store, error) {

	return p.store, nil
}

// Close closes all the child providers
func (p *MultipleAccountProvider) Close() error {
	var errs []error
	for _, key := range p.accountOrder {
		tmp := p.accountMap[key].Close()
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

		abox := provider.Mailbox{
			Name: key,
			Delimiter: multiDelimiter,
			Attributes: nil,
			Total: -1,
			Unseen: -1,
			Subscribed: false,
		}
		mailboxes = append(mailboxes, abox)

fmt.Printf("Request mailboxes from %s provider\n", a.c.Name)
		tmp, err := a.ListMailboxes()
		if err != nil {
			fmt.Printf("List failed for %s: %s\n", a.c.Name, err)
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

	/* map the virtual name */
	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, err }

	/* handle the bare account case */
	if aMbox == "" {
		return &provider.MailboxStatus{
			Name:        vMbox,
			NumMessages: 0,
			NumUnseen:   0,
			UIDValidity: 0,
		}, nil
	}

	/* pass request to account provider */
	status, err := a.GetMailboxStatus(aMbox)
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

	if aMbox == "" {
		return fmt.Errorf("cannot create account level entry")
	}

	return a.CreateMailbox(aMbox)
}

// DeleteMailbox deletes a mailbox
func (p *MultipleAccountProvider) DeleteMailbox(vMbox string) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	return a.DeleteMailbox(aMbox)
}

// EmptyMailbox empties a mailbox by deleting all its messages
func (p *MultipleAccountProvider) EmptyMailbox(vMbox string) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }

	if aMbox == "" {
		return fmt.Errorf("cannot delete account level entry")
	}

	return a.EmptyMailbox(aMbox)
}

// RenameMailbox renames a mailbox
func (p *MultipleAccountProvider) RenameMailbox(oldVirtualMailbox, newVirtualMailbox string) error {

	a, oldAccountMailbox, err := p.mapVirtualMailboxToAccount(oldVirtualMailbox)
	if err != nil { return err }
	if oldAccountMailbox == "" { return fmt.Errorf("invalid name for source mailbox") }

	aCheck, newAccountMailbox, err := p.mapVirtualMailboxToAccount(newVirtualMailbox)
	if err != nil { return err }
	if newAccountMailbox == "" { return fmt.Errorf("invalid name for target mailbox") }

	// TODO: handle moving between accounts
	if aCheck != a { return fmt.Errorf("cannot rename across accounts") }
	return a.RenameMailbox(oldAccountMailbox, newAccountMailbox)
}

// SubscribeMailbox subscribes to a mailbox
func (p *MultipleAccountProvider) SubscribeMailbox(vMbox string) error {

	if vMbox == "INBOX" { return nil }

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	if aMbox == "" { return nil }
	return a.SubscribeMailbox(aMbox)
}

// UnsubscribeMailbox unsubscribes from a mailbox
func (p *MultipleAccountProvider) UnsubscribeMailbox(vMbox string) error {

	if vMbox == "INBOX" { return nil }

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	if aMbox == "" { return nil }
	return a.UnsubscribeMailbox(aMbox)
}

// ListMessages returns a paginated list of messages
func (p *MultipleAccountProvider) ListMessages(vMbox string, sortOrder string, page, pageSize int) ([]provider.Message, int, error) {

	if vMbox == "INBOX" {
		return nil, 0, nil
	}

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, 0, err }
	if aMbox == "" { return nil, 0, nil }

	list, count, err := a.ListMessages(aMbox, sortOrder, page, pageSize)
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
	if aMbox == "" { return nil, 0, nil }
	list, count, err := a.SearchMessages(aMbox, query, sortOrder, page, pageSize)
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
	if aMbox == "" { return nil, fmt.Errorf("invalid mailbox") }
	msg, err := a.GetMessageMetadata(aMbox, id)
	if err != nil { return nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, nil
}

// GetMessagePart fetches a message part
func (p *MultipleAccountProvider) GetMessagePart(vMbox string, id provider.MessageID, partPath []int) (*provider.Message, *message.Entity, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, nil, err }
	if aMbox == "" { return nil, nil, fmt.Errorf("invalid mailbox") }
	msg, ent, err := a.GetMessagePart(aMbox, id, partPath)
	if err != nil { return nil, nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, ent, nil
}

// GetMessagePartRaw fetches a message part's raw bytes
func (p *MultipleAccountProvider) GetMessagePartRaw(vMbox string, id provider.MessageID, partPath []int, limit int64) (*provider.Message, []byte, []byte, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, nil, nil, err }
	if aMbox == "" { return nil, nil, nil, fmt.Errorf("invalid mailbox") }
	msg, b1, b2, err := a.GetMessagePartRaw(aMbox, id, partPath, limit)
	if err != nil { return nil, nil, nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, b1, b2, nil
}

// GetMessagePartWithData fetches a message part with both entity and raw data
func (p *MultipleAccountProvider) GetMessagePartWithData(vMbox string, id provider.MessageID, partPath []int) (*provider.Message, *message.Entity, []byte, []byte, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, nil, nil, nil, err }
	if aMbox == "" { return nil, nil, nil, nil, fmt.Errorf("invalid mailbox") }
	msg, e, b1, b2, err := a.GetMessagePartWithData(aMbox, id, partPath)
	if err != nil { return nil, nil, nil, nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, e, b1, b2, nil
}

// SetMessagesFlags sets flags for multiple messages
func (p *MultipleAccountProvider) SetMessagesFlags(vMbox string, ids []provider.MessageID, op provider.FlagOperation) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	if aMbox == "" { return fmt.Errorf("invalid mailbox") }
	return a.SetMessagesFlags(aMbox, ids, op)
}

// MarkAnswered marks a message as answered
func (p *MultipleAccountProvider) MarkAnswered(vMbox string, id provider.MessageID) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	if aMbox == "" { return fmt.Errorf("invalid mailbox") }
	return a.MarkAnswered(aMbox, id)
}

// AppendMessage appends a message to a mailbox and returns the UID
func (p *MultipleAccountProvider) AppendMessage(vMbox string, msg provider.OutgoingMessageWriter, mboxType provider.MailboxType) (*provider.Mailbox, provider.MessageID, uint32, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return nil, nil, 0, err }
	if aMbox == "" { return nil, nil, 0, fmt.Errorf("invalid mailbox") }
	mbox, mid, count, err := a.AppendMessage(aMbox, msg, mboxType)
	if err != nil { return nil, nil, 0, err }
	mbox.Name = p.mapAccountMailboxToVirtual(a, mbox.Name)
	mbox.Delimiter = multiDelimiter
	return mbox, mid, count, nil
}

// DeleteMessages deletes multiple messages
func (p *MultipleAccountProvider) DeleteMessages(vMbox string, ids []provider.MessageID) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox)
	if err != nil { return err }
	if aMbox == "" { return fmt.Errorf("invalid mailbox") }
	return a.DeleteMessages(aMbox, ids)
}

// MoveMessages moves multiple messages between mailboxes
func (p *MultipleAccountProvider) MoveMessages(srcVirtualMailbox, dstVirtualMailbox string, ids []provider.MessageID) (map[provider.MessageID]provider.MessageID, error) {

	a, srcAccountMailbox, err := p.mapVirtualMailboxToAccount(srcVirtualMailbox)
	if err != nil { return nil, err }
	if srcAccountMailbox == "" { return nil, fmt.Errorf("invalid source mailbox") }

	aCheck, dstAccountMailbox, err := p.mapVirtualMailboxToAccount(dstVirtualMailbox)
	if err != nil { return nil, err }
	if dstAccountMailbox == "" { return nil, fmt.Errorf("invalid target mailbox") }

	if aCheck != a {
		return nil, fmt.Errorf("move between accounts not supported yet")
	}

	return a.MoveMessages(srcAccountMailbox, dstAccountMailbox, ids)
}

// CopyMessages copies messages to another mailbox
func (p *MultipleAccountProvider) CopyMessages(srcVirtualMailbox, dstVirtualMailbox string, ids []provider.MessageID) (map[provider.MessageID]provider.MessageID, error) {

	a, srcAccountMailbox, err := p.mapVirtualMailboxToAccount(srcVirtualMailbox)
	if err != nil { return nil, err }
	if srcAccountMailbox == "" { return nil, fmt.Errorf("invalid source mailbox") }

	aCheck, dstAccountMailbox, err := p.mapVirtualMailboxToAccount(dstVirtualMailbox)
	if err != nil { return nil, err }
	if dstAccountMailbox == "" { return nil, fmt.Errorf("invalid target mailbox") }

	if aCheck != a {
		return nil, fmt.Errorf("copy between accounts not supported yet")
	}

	return a.CopyMessages(srcAccountMailbox, dstAccountMailbox, ids)
}

func (p *MultipleAccountProvider) HasThreadCapability() bool {

	return true
}

func (p *MultipleAccountProvider) HasESearchCapability() bool {

	return false
}


func newProvider(path string) (provider.MailProvider, error) {

	store, err := newFileStore(path)
	if err != nil {
		return nil, err
	}

	alist := []string{}
	amap := make(map[string]*account)

	for i, c := range store.accounts() {
		if err := c.check(); err != nil {
			log.Printf("provider/multi: invalid account config: %s", err)
			continue
		}
		key := "@" + c.Name
		if _, ok := amap[key]; ok {
			log.Printf("provider/multi: account %d has duplicate name %s", i, c.Name)
			continue
		}
		a, err := newAccount(c, store)
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
		store: store,
		accountOrder: alist,
		accountMap: amap,
		unifiedOrder: ulist,
		unifiedMap: umap,
	}, nil
}
