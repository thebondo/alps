package imap

import (
	"testing"
	"github.com/stretchr/testify/assert"
)

func TestIMAPConfig(t *testing.T) {

	// Test 1: Only domain name with scheme
	cfg := &config{
		Server: "imaps://imap.example.com",
		Insecure: false,
	}
	opt, err := configToOptions(cfg)
	assert.NoError(t, err)
	assert.False(t, opt.insecure)
	assert.Equal(t, "imap.example.com:993", opt.addr)

	// Test 2: Specific schemes
	cfg = &config{
		Server: "imaps://imap.example.com:123",
		Insecure: false,
	}
	opt, err = configToOptions(cfg)
	assert.NoError(t, err)
	assert.False(t, opt.insecure)
	assert.Equal(t, "imap.example.com:123", opt.addr)
}
