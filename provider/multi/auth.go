package multi

import (
	"os"
	"fmt"
	"bufio"
	"strings"
)

var ErrInvalidCredentials = fmt.Errorf("invalid credentials")

func Authenticate(passwdFile, username, password string) (string, error) {

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
