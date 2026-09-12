package multi

import (
	"fmt"
	"errors"
	"github.com/migadu/alps/provider"
)

var errWeird = errors.New("weird error")

type unifiedEntry struct {
	source *account
	mailbox string
}

type unifiedMailbox struct {
	name string
	entryList []*unifiedEntry
	entryMap map[string]*unifiedEntry
}

func (u *unifiedMailbox) clear() {

	if u.entryList != nil {
		u.entryList = u.entryList[:0]
	}
	u.entryMap = make(map[string]*unifiedEntry)
}

func (u *unifiedMailbox) addSource(a *account, mailbox string) error {

	if u == nil { return errWeird }
	key := fmt.Sprintf("@%s#%s", a.config.Name, mailbox)
	_, ok := u.entryMap[key]
	if ok {
		return fmt.Errorf("duplicate source %s", key)
	}
	e := &unifiedEntry{
		source: a,
		mailbox: mailbox,
	}
	u.entryList = append(u.entryList, e)
	u.entryMap[key] = e
	return nil
}

func (u *unifiedMailbox) getStatus() (*provider.MailboxStatus, error) {

	if u == nil { return nil, errWeird }
	status := &provider.MailboxStatus{
		Name:        u.name,
		NumMessages: 0,
		NumUnseen:   0,
		UIDValidity: 0,
	}
	return status, nil
}

func (u *unifiedMailbox) emptyAll() error {

	if u == nil { return errWeird }
	for _, e := range u.entryList {
		err := e.source.EmptyMailbox(e.mailbox)
		if err != nil {
			return err
		}
	}
	return nil
}

func (u *unifiedMailbox) listMessages(sortOrder string, page, pageSize int) ([]provider.Message, int, error) {

	if u == nil { return nil, 0, errWeird }
	return nil, 0, nil
}

// SearchMessages searches messages in a mailbox
func (u *unifiedMailbox) searchMessages(query string, sortOrder string, page, pageSize int) ([]provider.Message, int, error) {

	if u == nil { return nil, 0, errWeird }
	return nil, 0, nil
}

func (u *unifiedMailbox) subscribe() error {

	if u == nil { return errWeird }
	return nil
}

func (u *unifiedMailbox) unsubscribe() error {

	if u == nil { return errWeird }
	return nil
}

func newUnifiedMailbox(name string) *unifiedMailbox {

	return &unifiedMailbox{
		name: name,
		entryList: nil,
		entryMap: make(map[string]*unifiedEntry),
	}
}
