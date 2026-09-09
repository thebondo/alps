package multi

import (
	"time"
	"github.com/migadu/alps/provider"
	"github.com/migadu/alps/provider/imap"
)

type account struct {
	c *accountConfig
	p provider.MailProvider
	d string
}

func newAccount(c *accountConfig) (*account, error) {

	tls := true
	insecure := false
	timeout := 30*time.Second
	debug := true
	client, err := imap.Connect(c.Server, tls, insecure, timeout, debug)
	if err != nil {
		return nil, err
	}

	cmd := client.Login(c.Username, c.Password)
	err = cmd.Wait()
	if err != nil {
		client.Logout()
		return nil, err
	}

	return &account{
		c: c,
		p: imap.NewIMAPProvider(client, debug),
		d: ".",
	}, nil
}
