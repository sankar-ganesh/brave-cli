brave-cli
=========

Sort of junk validation rules that might come in handy one day

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/brave-cli.svg)](https://npmjs.org/package/brave-cli)
[![Downloads/week](https://img.shields.io/npm/dw/brave-cli.svg)](https://npmjs.org/package/brave-cli)
[![License](https://img.shields.io/npm/l/brave-cli.svg)](https://github.com/sankar-ganesh/brave-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g brave-cli
$ brave-cli COMMAND
running command...
$ brave-cli (-v|--version|version)
brave-cli/1.0.0 darwin-x64 node-v13.5.0
$ brave-cli --help [COMMAND]
USAGE
  $ brave-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`brave-cli help [COMMAND]`](#brave-cli-help-command)
* [`brave-cli vjson`](#brave-cli-vjson)

## `brave-cli help [COMMAND]`

display help for brave-cli

```
USAGE
  $ brave-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `brave-cli vjson`

Validates the JSON based on the rules given in the config file brave-cli.json [by default placed in the root folder]

```
USAGE
  $ brave-cli vjson

OPTIONS
  -C, --configj=configj  config json string to validate
  -P, --pathj=pathj      config json string to validate
  -c, --config=config    path of the config file
  -p, --path=path        path of the file to display

DESCRIPTION
  Config for JSON validation in brave-cli.json
  {
     "json": {
       "keys": {
         "underscore": true,     // Allows underscore in key names
         "hyphen": false,        // Disallow hyphen in key names
         "uppercase": false,     // Disallow uppercase in key names
         "digits": true,         // Allow digits in key names
         "lowercase": true       // Allow lowercase in key names
       }
     }
  }
```

_See code: [src/commands/vjson.js](https://github.com/sankar-ganesh/brave-cli/blob/v1.0.0/src/commands/vjson.js)_
<!-- commandsstop -->
