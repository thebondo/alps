package provider

import (
	"fmt"
	"github.com/BurntSushi/toml"
)

type ConfigFactory func(data *toml.Primitive) (Options, error)

var providerMap = make(map[string]ConfigFactory)

func Register(name string, f ConfigFactory) {

	_, ok := providerMap[name]
	if ok {
		panic(fmt.Sprintf("Duplicate provider name %s", name))
	}
	providerMap[name] = f
}

func Configure(name string, config map[string]*toml.Primitive) (Options, error) {

	if name == "" {
		return nil, fmt.Errorf("no provider type")
	}
	pcf, ok := providerMap[name]
	if !ok {
		return nil, fmt.Errorf("unknown provider type '%s'", name)
	}

	return pcf(config[name])
}

