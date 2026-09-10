package maildir

import (
	"time"
	"bufio"
	"crypto/md5"
	"crypto/sha256"
	"crypto/sha512"
	"encoding/hex"
	"fmt"
	"os"
	"strings"
	"path/filepath"

	"github.com/migadu/alps/provider"
	"github.com/BurntSushi/toml"

	"golang.org/x/crypto/bcrypt"
)

// ErrInvalidCredentials is returned when password verification fails
var ErrInvalidCredentials = fmt.Errorf("invalid credentials")

// Authenticate verifies the username and password against a Dovecot passwd file.
// Returns the parsed user home directory if successful, or an error.
func authenticate(passwdFile, username, password string) (string, error) {
	file, err := os.Open(passwdFile)
	if err != nil {
		return "", fmt.Errorf("failed to open passwd file: %w", err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}

		parts := strings.Split(line, ":")
		if len(parts) < 2 {
			continue
		}

		fileUser := parts[0]
		if fileUser != username {
			continue
		}

		hash := parts[1]
		homeDir := ""
		if len(parts) >= 6 {
			homeDir = parts[5]
		}

		if err := verifyHash(password, hash); err != nil {
			return "", ErrInvalidCredentials
		}

		return homeDir, nil
	}

	if err := scanner.Err(); err != nil {
		return "", fmt.Errorf("error reading passwd file: %w", err)
	}

	return "", ErrInvalidCredentials
}

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
	case "{CRYPT}":
		// Only bcrypt is implemented for now.
		if strings.HasPrefix(hash, "$2a$") || strings.HasPrefix(hash, "$2b$") || strings.HasPrefix(hash, "$2y$") || strings.HasPrefix(hash, "$2x$") {
			return bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
		}
		return fmt.Errorf("unsupported crypt scheme: %s", hash)
	case "{MD5}":
		sum := md5.Sum([]byte(password))
		if hex.EncodeToString(sum[:]) != hash {
			return fmt.Errorf("password mismatch")
		}
		return nil
	case "{SHA256}":
		sum := sha256.Sum256([]byte(password))
		if hex.EncodeToString(sum[:]) != hash {
			return fmt.Errorf("password mismatch")
		}
		return nil
	case "{SHA512}":
		sum := sha512.Sum512([]byte(password))
		if hex.EncodeToString(sum[:]) != hash {
			return fmt.Errorf("password mismatch")
		}
		return nil
	default:
		return fmt.Errorf("unsupported hash scheme: %s", scheme)
	}
}

type options struct {
	Path           string `toml:"path"`
	AuthPasswdFile string `toml:"auth_passwd_file"`
}

func (o *options) Type() string {

	return "maildir"
}

func (o *options) CreateFactory(timeout time.Duration) provider.AuthenticatedProviderFactory {

	return func(username, password string) (provider.MailProvider, error) {

		// Authenticate against dovecot passwd file
		homeDir, err := authenticate(o.AuthPasswdFile, username, password)
		if err != nil {
			return nil, err
		}

		// Use explicit Maildir path if provided, resolving %u and %d, otherwise use homeDir/Maildir
		path := o.Path
		if path != "" {
			parts := strings.Split(username, "@")
			domain := ""
			user := username
			if len(parts) == 2 {
				user = parts[0]
				domain = parts[1]
			}
			path = strings.ReplaceAll(path, "%u", user)
			path = strings.ReplaceAll(path, "%n", username) // Sometimes %n is full username
			path = strings.ReplaceAll(path, "%d", domain)
		} else {
			path = filepath.Join(homeDir, "Maildir")
		}

		return newProvider(path, username), nil
	}
}

func configure(raw *toml.Primitive) (provider.Options, error) {

	if raw == nil {
		return nil, fmt.Errorf("missing configuration for [provider.multi]")
	}

	var opt options
	err := toml.PrimitiveDecode(*raw, &opt)
	if err != nil {
		return nil, fmt.Errorf("error decoding configuration for [provider.maildir]: %v", err)
	}

	if opt.AuthPasswdFile == "" {
		return nil, fmt.Errorf("no password file specified in config file for maildir provider ([provider.maildir] path)")
	}

	return &opt, nil
}

func init() {

	provider.Register("maildir", configure)
}
