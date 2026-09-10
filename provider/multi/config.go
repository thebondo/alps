package multi

import (
	"fmt"
	"errors"
	"encoding/json"
)

type userConfig struct {
	Accounts []*accountConfig           `json:"accounts"`
	Settings map[string]json.RawMessage `json:"settings"`
}

type accountConfig struct {
	Name string                   `json:"name"`
	Username string               `json:"username"`
	Password string               `json:"password"`
	Server string                 `json:"server"`
}

func (c *accountConfig) check() error {

	var errList []error
	if c.Name == "" {
		errList = append(errList, fmt.Errorf("missing name"))
	}
	if c.Username == "" {
		errList = append(errList, fmt.Errorf("missing username"))
	}
	if c.Password == "" {
		errList = append(errList, fmt.Errorf("missing password"))
	}
	if c.Server == "" {
		errList = append(errList, fmt.Errorf("missing server"))
	}
	if len(errList) > 0 {
		return errors.Join(errList...)
	}
	return nil
}

