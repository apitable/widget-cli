@apitable/widget-cli
====================

help you build awesome apitable widget

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@apitable/widget-cli.svg)](https://npmjs.org/package/@apitable/widget-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@apitable/widget-cli.svg)](https://npmjs.org/package/@apitable/widget-cli)
[![License](https://img.shields.io/npm/l/@apitable/widget-cli.svg)](https://github.com/apitable/widget-cli/blob/master/package.json)

* [Docs](https://developers.apitable.com/widget/introduction)<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @apitable/widget-cli
$ widget-cli COMMAND
running command...
$ widget-cli (-v|--version|version)
@apitable/widget-cli/1.0.4 darwin-x64 node-v16.15.0
$ widget-cli --help [COMMAND]
USAGE
  $ widget-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`widget-cli auth [TOKEN]`](#widget-cli-auth-token)
* [`widget-cli help [COMMAND]`](#widget-cli-help-command)
* [`widget-cli init`](#widget-cli-init)
* [`widget-cli list-release [PACKAGEID]`](#widget-cli-list-release-packageid)
* [`widget-cli release`](#widget-cli-release)
* [`widget-cli rollback [PACKAGEID] [VERSION]`](#widget-cli-rollback-packageid-version)
* [`widget-cli start`](#widget-cli-start)
* [`widget-cli submit`](#widget-cli-submit)
* [`widget-cli unpublish [PACKAGEID]`](#widget-cli-unpublish-packageid)

## `widget-cli auth [TOKEN]`

Login authentication, and cache the API Token

```
USAGE
  $ widget-cli auth [TOKEN]

ARGUMENTS
  TOKEN  Your API Token

OPTIONS
  -h, --host=host  Specifies the host of the server, such as https://apitable.com

EXAMPLE
  $ widget-cli auth [apiToken] --host [host]
  Succeed!
```

_See code: [lib/commands/auth.js](https://github.com/apitable/widget-cli/blob/v1.0.4/lib/commands/auth.js)_

## `widget-cli help [COMMAND]`

display help for widget-cli

```
USAGE
  $ widget-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.3.1/src/commands/help.ts)_

## `widget-cli init`

Create a widget project and register it in your space

```
USAGE
  $ widget-cli init

OPTIONS
  -c, --name=name            Name your widget and project
  -h, --host=host            Specifies the host of the server, such as https://apitable.com
  -p, --packageId=packageId  The widget package id
  -s, --spaceId=spaceId      In which space to put the widget on
  -t, --token=token          Your API Token
  -u, --template=template    The template code zip from apitable or github

EXAMPLE
  $ widget-cli init
  your widget: my-widget is successfully created, cd my-widget/ check it out!
```

_See code: [lib/commands/init.js](https://github.com/apitable/widget-cli/blob/v1.0.4/lib/commands/init.js)_

## `widget-cli list-release [PACKAGEID]`

List all version information for your widget package release

```
USAGE
  $ widget-cli list-release [PACKAGEID]

ARGUMENTS
  PACKAGEID  The widget package you want to unpublish

OPTIONS
  -g, --global       Specify global widget package
  -h, --host=host    Specifies the host of the server, such as https://apitable.com
  -t, --token=token  Your API Token

EXAMPLE
  $ widget-cli list-release [packageId]
  Succeed!
```

_See code: [lib/commands/list-release.js](https://github.com/apitable/widget-cli/blob/v1.0.4/lib/commands/list-release.js)_

## `widget-cli release`

Release your widget package

```
USAGE
  $ widget-cli release

OPTIONS
  -h, --host=host              Specifies the host of the server, such as https://apitable.com
  -l, --uploadHost=uploadHost  Specifies the upload host of the server, such as https://apitable.com
  -t, --token=token            Your API Token
  -v, --version=version        Specifies the version of the project
  --ci                         Run in CI mode, no version prompt

EXAMPLE
  $ widget-cli release
  Succeed!
```

_See code: [lib/commands/release.js](https://github.com/apitable/widget-cli/blob/v1.0.4/lib/commands/release.js)_

## `widget-cli rollback [PACKAGEID] [VERSION]`

Rollback the widget package to the specified version

```
USAGE
  $ widget-cli rollback [PACKAGEID] [VERSION]

ARGUMENTS
  PACKAGEID  The widget package you want to rollback
  VERSION    The version of the widget package you want to rollback

OPTIONS
  -g, --global       Specify global widget package
  -h, --host=host    Specifies the host of the server, such as https://apitable.com
  -t, --token=token  Your API Token

EXAMPLE
  $ widget-cli rollback [packageId] [version] --host [host] --token [token]
  Succeed!
```

_See code: [lib/commands/rollback.js](https://github.com/apitable/widget-cli/blob/v1.0.4/lib/commands/rollback.js)_

## `widget-cli start`

Start current widget project in develop mode

```
USAGE
  $ widget-cli start

OPTIONS
  -o, --protocol=protocol  [default: https] Specifies the protocol of the local server
  -p, --port=port          [default: 9000] Specifies the port of the local server
  --debug                  Show debug information for cli it self

EXAMPLE
  $ widget-cli start
  Compiling...
```

_See code: [lib/commands/start.js](https://github.com/apitable/widget-cli/blob/v1.0.4/lib/commands/start.js)_

## `widget-cli submit`

Submit your widget package

```
USAGE
  $ widget-cli submit

OPTIONS
  -h, --host=host              Specifies the host of the server, such as https://apitable.com
  -l, --uploadHost=uploadHost  Specifies the upload host of the server, such as https://apitable.com
  -t, --token=token            Your API Token
  -v, --version=version        Specifies the version of the project
  --ci                         Run in CI mode, no prompt

EXAMPLE
  $ widget-cli submit
  Succeed!
```

_See code: [lib/commands/submit.js](https://github.com/apitable/widget-cli/blob/v1.0.4/lib/commands/submit.js)_

## `widget-cli unpublish [PACKAGEID]`

Unpublish your widget package

```
USAGE
  $ widget-cli unpublish [PACKAGEID]

ARGUMENTS
  PACKAGEID  The widget package you want to unpublish

OPTIONS
  -g, --global       Specify global widget package
  -h, --host=host    Specifies the host of the server, such as https://apitable.com
  -t, --token=token  Your API Token
  --noConfirm        Do not show confirm

EXAMPLE
  $ widget-cli unpublish
  Succeed!
```

_See code: [lib/commands/unpublish.js](https://github.com/apitable/widget-cli/blob/v1.0.4/lib/commands/unpublish.js)_
<!-- commandsstop -->
