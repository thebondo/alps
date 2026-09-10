package imap

import (
	"fmt"
	"time"
	"strings"
	"net/url"
	"github.com/BurntSushi/toml"
	"github.com/migadu/alps/provider"
)

type config struct {
	Server   string `toml:"server"`   // Server URL (e.g., "imaps://imap.example.com:993")
	Insecure bool   `toml:"insecure"` // Allow insecure connections
}

type options struct {
	addr     string
	tls      bool
	insecure bool
}

func (o *options) Type() string {

	return "imap"
}

func (o *options) CreateFactory(timeout time.Duration) provider.AuthenticatedProviderFactory {

	return func(username, password string) (provider.MailProvider, error) {

		debug := true
		client, err := Connect(o.addr, o.tls, o.insecure, timeout, debug)
		if err != nil {
			return nil, err
		}

		if err := client.Login(username, password).Wait(); err != nil {
			client.Logout()
			return nil, err
		}

		return NewIMAPProvider(client, debug), nil
	}
}

func configToOptions(cfg *config) (*options, error) {

	opt := &options {
		addr: "",
		tls: true,
		insecure: false,
	}

	if cfg.Server == "" {
		return nil, fmt.Errorf("IMAP server requires a scheme (imaps://, imap://, imap+insecure://), got empty string")
	}

	if !strings.ContainsAny(cfg.Server, ":/") {
		cfg.Server = "//" + cfg.Server
	}
	u, err := url.Parse(cfg.Server)
	if err != nil {
		return nil, fmt.Errorf("failed to parse IMAP server: %v", err)
	}

	if u.Scheme == "" {
		return nil, fmt.Errorf("IMAP server requires a scheme (imaps://, imap://, imap+insecure://), got: %v", u.String())
	}
	switch u.Scheme {
	case "imaps":
		opt.tls = true
	case "imap+insecure":
		opt.insecure = true
	case "imap":
	default:
		return nil, fmt.Errorf("unknown scheme for IMAP server: %v", u.Scheme)
	}

	if cfg.Insecure {
		opt.insecure = true
	}

	opt.addr = u.Host
	if !strings.ContainsRune(opt.addr, ':') {
		if u.Scheme == "imaps" {
			opt.addr += ":993"
		} else {
			opt.addr += ":143"
		}
	}

	return opt, nil
}

func configure(raw *toml.Primitive) (provider.Options, error) {

	if raw == nil {
		return nil, fmt.Errorf("missing configuration for [provider.multi]")
	}

	var cfg config
	err := toml.PrimitiveDecode(*raw, &cfg)
	if err != nil {
		return nil, fmt.Errorf("error decoding configuration for [provider.imap]: %v", err)
	}

	return configToOptions(&cfg)
}

func init() {

	provider.Register("imap", configure)
}
