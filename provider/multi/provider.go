package multi

import (
	"os"
	"log"
	"fmt"
	"bytes"
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

func (s *fileStore) unified() []string {

	return s.cache.Unified
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


var unifiedNameMap = map[string]string{
	"inbox":"INBOX",
	"drafts":"drafts",
	"archives":"archives",
	"archive":"archives",
	"sent":"sent",
	"trash":"trash",
	"junk":"junk",
	"spam":"junk",
}

func normalizeUnifiedName(name string) string {

	name = strings.TrimSpace(name)
	name = strings.ToLower(name)
	return unifiedNameMap[name]
}

type MultipleAccountConfig struct {
	path         string
	debug        bool
	debugBackend bool
}

type MultipleAccountProvider struct {
	config       *MultipleAccountConfig
	store        *fileStore
	accountOrder []string
	accountMap   map[string]*account
	unifiedOrder []string
	unifiedMap   map[string]int
}

func (p *MultipleAccountProvider) isUnified(name string) bool {

	name = normalizeUnifiedName(name)
	if name == "" { return false }
	_, ok := p.unifiedMap[name]
	return ok
}

// map an account and mailbox name to a virtual mailbox name
func (p *MultipleAccountProvider) mapAccountMailboxToVirtualDetails(a *account, name string) (string, string) {

	uName := ""
	if name == "" {
		return "@" + a.config.Name, uName
	}
	parts := strings.Split(name, a.delim)
	uName = normalizeUnifiedName(parts[0])
	if uName != "" {
		_, ok := p.unifiedMap[name]
		if ok {
			if len(parts) == 1 {
				return uName + multiDelimiterString +  "@" + a.config.Name, uName
			} else {
				return uName + multiDelimiterString +  "@" + a.config.Name + multiDelimiterString + strings.Join(parts[1:], multiDelimiterString), uName
			}
		}
	}
	return "@" + a.config.Name + multiDelimiterString + strings.Join(parts, multiDelimiterString), uName
}

// map an account and mailbox name to a virtual mailbox name
func (p *MultipleAccountProvider) mapAccountMailboxToVirtual(a *account, name string) string {

	result, _ := p.mapAccountMailboxToVirtualDetails(a, name)
	return result
}

type nameMappingFlag int
var allowNone nameMappingFlag = 0
var allowAccount nameMappingFlag = 1
var allowUnified nameMappingFlag = 2
var allowAny = allowAccount | allowUnified

// map a virtual mailbox name to an account and mailbox name
func (p *MultipleAccountProvider) mapVirtualMailboxToAccount(name string, flags nameMappingFlag) (*account, string, error) {

	parts := strings.Split(name, multiDelimiterString)
	n := len(parts)

	key := parts[0]
	a, ok := p.accountMap[key]
	if !ok {
		_, ok := p.unifiedMap[key]
		if !ok {
			return nil, "", ErrInvalidMailbox
		}
		if n == 1 {
			if flags & allowUnified == allowUnified {
				return nil, key, nil
			}
			return nil, "", ErrInvalidMailbox
		}
		a, ok = p.accountMap[parts[1]]
		if !ok {
			return nil, "", ErrInvalidMailbox
		}
		aName := a.getUnifiedName(key)
		if aName == "" {
			return nil, "", ErrInvalidMailbox
		}
		if n == 2 {
			return a, aName, nil
		} else {
			return a, aName + a.delim + strings.Join(parts[2:], a.delim), nil
		}
	}
	if n == 1 {
		if flags & allowAccount == allowAccount {
			return a, "", nil
		}
		return nil, "", ErrInvalidMailbox
	} else {
		return a, strings.Join(parts[1:], a.delim), nil
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

	umap := make(map[string]int)

	for _, name := range p.unifiedOrder {
		mbox := provider.Mailbox{
			Name: name,
			Delimiter: multiDelimiter,
			Attributes: nil,
			Total: 0,
			Unseen: 0,
			Subscribed: false,
		}
		mailboxes = append(mailboxes, mbox)
		umap[name] = len(mailboxes) - 1
	}

	for _, key := range p.accountOrder {
		a := p.accountMap[key]

		abox := provider.Mailbox{
			Name: key,
			Delimiter: multiDelimiter,
			Attributes: nil,
			Total: 0,
			Unseen: 0,
			Subscribed: false,
		}
		mailboxes = append(mailboxes, abox)

		tmp, err := a.ListMailboxes()
		if err != nil {
			continue
		}
		for _, mbox := range tmp {
			vName, uName := p.mapAccountMailboxToVirtualDetails(a, mbox.Name)
			if uName != "" {
				a.setUnifiedName(uName, mbox.Name)
				index, ok := umap[uName]
				if ok {
					u := &mailboxes[index]
					if mbox.Total >= 0 && mbox.Unseen >= 0 {
						u.Total += mbox.Total
						u.Unseen += mbox.Unseen
					}
				}
			}
			mbox.Name = vName
			mbox.Delimiter = multiDelimiter
			mailboxes = append(mailboxes, mbox)
		}
	}
	if p.config.debug {
		for i, x := range mailboxes {
			log.Printf("provider/multi: virtual mailbox %d = %s, total = %d, unseen = %d, attr = (%s)\n", i, x.Name, x.Total, x.Unseen, strings.Join(x.Attributes, ", "))
		}
	}
	return mailboxes, nil
}

// GetMailboxStatus returns status for a specific mailbox
func (p *MultipleAccountProvider) GetMailboxStatus(vMbox string) (*provider.MailboxStatus, error) {

	/* map the virtual name */
	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowAny)
	if err != nil { return nil, err }

	/* handle the top level unified folder case */
	if a == nil {
		return &provider.MailboxStatus{
			Name:        aMbox,
			NumMessages: 0,
			NumUnseen:   0,
			UIDValidity: 0,
		}, nil
	}

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

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowAny)
	if err != nil { return err }

	if a == nil {
		return fmt.Errorf("cannot create entry in unified folder")
	}
	if aMbox == "" {
		return fmt.Errorf("cannot create account level entry")
	}

	return a.CreateMailbox(aMbox)
}

// DeleteMailbox deletes a mailbox
func (p *MultipleAccountProvider) DeleteMailbox(vMbox string) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowNone)
	if err != nil { return err }
	return a.DeleteMailbox(aMbox)
}

// EmptyMailbox empties a mailbox by deleting all its messages
func (p *MultipleAccountProvider) EmptyMailbox(vMbox string) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowNone)
	if err != nil { return err }
	return a.EmptyMailbox(aMbox)
}

// RenameMailbox renames a mailbox
func (p *MultipleAccountProvider) RenameMailbox(oldVirtualMailbox, newVirtualMailbox string) error {

	a, oldAccountMailbox, err := p.mapVirtualMailboxToAccount(oldVirtualMailbox, allowNone)
	if err != nil { return err }

	aCheck, newAccountMailbox, err := p.mapVirtualMailboxToAccount(newVirtualMailbox, allowNone)
	if err != nil { return err }

	// TODO: handle moving between accounts
	if aCheck != a { return fmt.Errorf("cannot rename across accounts") }
	return a.RenameMailbox(oldAccountMailbox, newAccountMailbox)
}

// SubscribeMailbox subscribes to a mailbox
func (p *MultipleAccountProvider) SubscribeMailbox(vMbox string) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowAny)
	if err != nil { return err }
	if a == nil || aMbox == "" { return nil }
	return a.SubscribeMailbox(aMbox)
}

// UnsubscribeMailbox unsubscribes from a mailbox
func (p *MultipleAccountProvider) UnsubscribeMailbox(vMbox string) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowAny)
	if err != nil { return err }
	if a == nil || aMbox == "" { return nil }
	return a.UnsubscribeMailbox(aMbox)
}

// ListMessages returns a paginated list of messages
func (p *MultipleAccountProvider) ListMessages(vMbox string, sortOrder string, page, pageSize int) ([]provider.Message, int, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowAny)
	if err != nil { return nil, 0, err }
	if a == nil || aMbox == "" { return nil, 0, nil }

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

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowAny)
	if err != nil { return nil, 0, err }
	if a == nil || aMbox == "" { return nil, 0, nil }
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

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowNone)
	if err != nil { return nil, err }
	msg, err := a.GetMessageMetadata(aMbox, id)
	if err != nil { return nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, nil
}

// GetMessagePart fetches a message part
func (p *MultipleAccountProvider) GetMessagePart(vMbox string, id provider.MessageID, partPath []int) (*provider.Message, *message.Entity, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowNone)
	if err != nil { return nil, nil, err }
	msg, ent, err := a.GetMessagePart(aMbox, id, partPath)
	if err != nil { return nil, nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, ent, nil
}

// GetMessagePartRaw fetches a message part's raw bytes
func (p *MultipleAccountProvider) GetMessagePartRaw(vMbox string, id provider.MessageID, partPath []int, limit int64) (*provider.Message, []byte, []byte, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowNone)
	if err != nil { return nil, nil, nil, err }
	msg, b1, b2, err := a.GetMessagePartRaw(aMbox, id, partPath, limit)
	if err != nil { return nil, nil, nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, b1, b2, nil
}

// GetMessagePartWithData fetches a message part with both entity and raw data
func (p *MultipleAccountProvider) GetMessagePartWithData(vMbox string, id provider.MessageID, partPath []int) (*provider.Message, *message.Entity, []byte, []byte, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowNone)
	if err != nil { return nil, nil, nil, nil, err }
	msg, e, b1, b2, err := a.GetMessagePartWithData(aMbox, id, partPath)
	if err != nil { return nil, nil, nil, nil, err }
	msg.Mailbox = p.mapAccountMailboxToVirtual(a, msg.Mailbox)
	return msg, e, b1, b2, nil
}

// SetMessagesFlags sets flags for multiple messages
func (p *MultipleAccountProvider) SetMessagesFlags(vMbox string, ids []provider.MessageID, op provider.FlagOperation) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowNone)
	if err != nil { return err }
	return a.SetMessagesFlags(aMbox, ids, op)
}

// MarkAnswered marks a message as answered
func (p *MultipleAccountProvider) MarkAnswered(vMbox string, id provider.MessageID) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowNone)
	if err != nil { return err }
	return a.MarkAnswered(aMbox, id)
}

// AppendMessage appends a message to a mailbox and returns the UID
func (p *MultipleAccountProvider) AppendMessage(vMbox string, msg provider.OutgoingMessageWriter, mboxType provider.MailboxType) (*provider.Mailbox, provider.MessageID, uint32, error) {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowNone)
	if err != nil { return nil, nil, 0, err }
	mbox, mid, count, err := a.AppendMessage(aMbox, msg, mboxType)
	if err != nil { return nil, nil, 0, err }
	mbox.Name = p.mapAccountMailboxToVirtual(a, mbox.Name)
	mbox.Delimiter = multiDelimiter
	return mbox, mid, count, nil
}

// DeleteMessages deletes multiple messages
func (p *MultipleAccountProvider) DeleteMessages(vMbox string, ids []provider.MessageID) error {

	a, aMbox, err := p.mapVirtualMailboxToAccount(vMbox, allowNone)
	if err != nil { return err }
	return a.DeleteMessages(aMbox, ids)
}

// MoveMessages moves multiple messages between mailboxes
func (p *MultipleAccountProvider) MoveMessages(srcVirtualMailbox, dstVirtualMailbox string, ids []provider.MessageID) (map[provider.MessageID]provider.MessageID, error) {

	src, srcAccountMailbox, err := p.mapVirtualMailboxToAccount(srcVirtualMailbox, allowNone)
	if err != nil { return nil, err }

	dst, dstAccountMailbox, err := p.mapVirtualMailboxToAccount(dstVirtualMailbox, allowNone)
	if err != nil { return nil, err }

	if dst == src {
		return src.MoveMessages(srcAccountMailbox, dstAccountMailbox, ids)
	}

	result := make(map[provider.MessageID]provider.MessageID)
	for _, srcID := range ids {
		_, b1, b2, err := src.GetMessagePartRaw(srcAccountMailbox, srcID, nil, 0)
		if err != nil {
			return nil, err
		}
		b := make([]byte, 0, len(b1) + len(b2))
		b = append(b, b1...)
		b = append(b, b2...)
		buf := bytes.NewBuffer(b)
		_, dstID, _, err := dst.AppendMessage(dstAccountMailbox, buf, provider.MailboxTypeUser)
		if err != nil {
			return nil, err
		}
		result[srcID] = dstID
	}
	err = src.DeleteMessages(srcAccountMailbox, ids)
	if err != nil {
		return nil, err
	}
	return result, nil
}

// CopyMessages copies messages to another mailbox
func (p *MultipleAccountProvider) CopyMessages(srcVirtualMailbox, dstVirtualMailbox string, ids []provider.MessageID) (map[provider.MessageID]provider.MessageID, error) {

	src, srcAccountMailbox, err := p.mapVirtualMailboxToAccount(srcVirtualMailbox, allowNone)
	if err != nil { return nil, err }

	dst, dstAccountMailbox, err := p.mapVirtualMailboxToAccount(dstVirtualMailbox, allowNone)
	if err != nil { return nil, err }

	if dst == src {
		return src.CopyMessages(srcAccountMailbox, dstAccountMailbox, ids)
	}

	result := make(map[provider.MessageID]provider.MessageID)
	for _, srcID := range ids {
		_, b1, b2, err := src.GetMessagePartRaw(srcAccountMailbox, srcID, nil, 0)
		if err != nil {
			return nil, err
		}
		b := make([]byte, 0, len(b1) + len(b2))
		b = append(b, b1...)
		b = append(b, b2...)
		buf := bytes.NewBuffer(b)
		_, dstID, _, err := dst.AppendMessage(dstAccountMailbox, buf, provider.MailboxTypeUser)
		if err != nil {
			return nil, err
		}
		result[srcID] = dstID
	}
	return result, nil
}

func (p *MultipleAccountProvider) HasThreadCapability() bool {

	return true
}

func (p *MultipleAccountProvider) HasESearchCapability() bool {

	return false
}

func newProvider(cfg *MultipleAccountConfig) (provider.MailProvider, error) {

	store, err := newFileStore(cfg.path)
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
		a, err := newAccount(c, store, cfg.debugBackend)
		if err != nil {
			log.Printf("provider/multi: connect failed for %s: %s", c.Name, err)
			continue
		}
		alist = append(alist, key)
		amap[key] = a
	}

	ulist := []string{}
	umap := make(map[string]int)
	for _, name := range store.unified() {
		name = normalizeUnifiedName(name)
		if name != "" {
			if _, ok := umap[name]; !ok {
				umap[name] = len(ulist)
				ulist = append(ulist, name)
			}
		}
	}

	return &MultipleAccountProvider{
		config: cfg,
		store: store,
		accountOrder: alist,
		accountMap: amap,
		unifiedOrder: ulist,
		unifiedMap: umap,
	}, nil
}
