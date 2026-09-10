package multi

import (
	"os"
	"fmt"
	"time"
	"bufio"
	"strings"
	"github.com/migadu/alps/provider"
	"github.com/BurntSushi/toml"
)

var ErrInvalidCredentials = fmt.Errorf("invalid credentials")

func verifyHash(password, hash string) error {

	scheme := "{PLAIN}"
	if strings.HasPrefix(hash, "{") {
		endIdx := strings.Index(hash, "}")
		if endIdx > 0 {
			scheme = hash[:endIdx+1]
			hash = hash[endIdx+1:]
		}
	}

	switch scheme {
	case "{PLAIN}":
		if password != hash {
			return fmt.Errorf("password mismatch")
		}
		return nil
	default:
		return fmt.Errorf("unsupported hash scheme: %s", scheme)
	}
}

func authenticate(passwordFile, username, password string) (string, error) {

	file, err := os.Open(passwordFile)
	if err != nil {
		return "", fmt.Errorf("failed to open password file: %w", err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}

		parts := strings.Split(line, ":")
		if len(parts) < 3 {
			continue
		}

		fileUser := parts[0]
		if fileUser != username {
			continue
		}

		hash := parts[1]
		if err := verifyHash(password, hash); err != nil {
			return "", ErrInvalidCredentials
		}

		return parts[2], nil
	}

	if err := scanner.Err(); err != nil {
		return "", fmt.Errorf("error reading passwd file: %w", err)
	}

	return "", ErrInvalidCredentials
}

type options struct {
	Path string  `toml:"path"`
}

func (o *options) Type() string {

	return "multi"
}

func (o *options) CreateFactory(timeout time.Duration) provider.AuthenticatedProviderFactory {

	return func(username, password string) (provider.MailProvider, error) {

		userPath, err := authenticate(o.Path, username, password)
		if err != nil {
			return nil, err
		}
		return newProvider(userPath)
	}
}

func configure(raw *toml.Primitive) (provider.Options, error) {

	if raw == nil {
		return nil, fmt.Errorf("missing configuration for [provider.multi]")
	}

	var opt options
	err := toml.PrimitiveDecode(*raw, &opt)
	if err != nil {
		return nil, fmt.Errorf("error decoding configuration for [provider.multi]: %v", err)
	}

	if opt.Path == "" {
		return nil, fmt.Errorf("no account data path specified in config file for multiple account provider ([provider.multi] path)")
	}

	return &opt, nil
}

func init() {

	provider.Register("multi", configure)
}
