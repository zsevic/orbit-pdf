@zsevic/orbit-pdf
=========

CLI tool for converting [Orbit](https://github.com/sharu725/online-cv) HTML resume to pdf

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@zsevic/orbit-pdf.svg)](https://npmjs.org/package/@zsevic/orbit-pdf)
[![Downloads/week](https://img.shields.io/npm/dw/@zsevic/orbit-pdf.svg)](https://www.npmjs.com/package/@zsevic/orbit-pdf)
[![License](https://img.shields.io/npm/l/@zsevic/orbit-pdf.svg)](https://github.com/zsevic/orbit-pdf/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @zsevic/orbit-pdf
$ orbit-pdf COMMAND
running command...
$ orbit-pdf (--version)
@zsevic/orbit-pdf/2.0.8 linux-x64 node-v20.6.0
$ orbit-pdf --help [COMMAND]
USAGE
  $ orbit-pdf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`orbit-pdf convert`](#orbit-pdf-convert)
* [`orbit-pdf help [COMMANDS]`](#orbit-pdf-help-commands)
* [`orbit-pdf plugins`](#orbit-pdf-plugins)
* [`orbit-pdf plugins:install PLUGIN...`](#orbit-pdf-pluginsinstall-plugin)
* [`orbit-pdf plugins:inspect PLUGIN...`](#orbit-pdf-pluginsinspect-plugin)
* [`orbit-pdf plugins:install PLUGIN...`](#orbit-pdf-pluginsinstall-plugin-1)
* [`orbit-pdf plugins:link PLUGIN`](#orbit-pdf-pluginslink-plugin)
* [`orbit-pdf plugins:uninstall PLUGIN...`](#orbit-pdf-pluginsuninstall-plugin)
* [`orbit-pdf plugins:uninstall PLUGIN...`](#orbit-pdf-pluginsuninstall-plugin-1)
* [`orbit-pdf plugins:uninstall PLUGIN...`](#orbit-pdf-pluginsuninstall-plugin-2)
* [`orbit-pdf plugins:update`](#orbit-pdf-pluginsupdate)

## `orbit-pdf convert`

Converts html resume to pdf

```
USAGE
  $ orbit-pdf convert [-f <value>] [-l <value>] [-p <value>] [-s <value>] [-u <value>]

FLAGS
  -f, --format=<value>    format, example: A3
  -l, --lastPage=<value>  last page to print
  -p, --path=<value>      path for downloaded pdf resume
  -s, --scale=<value>     scale, example: 1
  -u, --url=<value>       html resume url

DESCRIPTION
  Converts html resume to pdf
  ...
  Converts html resume to pdf and downloads it
```

## `orbit-pdf help [COMMANDS]`

Display help for orbit-pdf.

```
USAGE
  $ orbit-pdf help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for orbit-pdf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.4/src/commands/help.ts)_

## `orbit-pdf plugins`

List installed plugins.

```
USAGE
  $ orbit-pdf plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ orbit-pdf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/index.ts)_

## `orbit-pdf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ orbit-pdf plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ orbit-pdf plugins:add

EXAMPLES
  $ orbit-pdf plugins:install myplugin 

  $ orbit-pdf plugins:install https://github.com/someuser/someplugin

  $ orbit-pdf plugins:install someuser/someplugin
```

## `orbit-pdf plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ orbit-pdf plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ orbit-pdf plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/inspect.ts)_

## `orbit-pdf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ orbit-pdf plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ orbit-pdf plugins:add

EXAMPLES
  $ orbit-pdf plugins:install myplugin 

  $ orbit-pdf plugins:install https://github.com/someuser/someplugin

  $ orbit-pdf plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/install.ts)_

## `orbit-pdf plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ orbit-pdf plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ orbit-pdf plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/link.ts)_

## `orbit-pdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ orbit-pdf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ orbit-pdf plugins:unlink
  $ orbit-pdf plugins:remove
```

## `orbit-pdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ orbit-pdf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ orbit-pdf plugins:unlink
  $ orbit-pdf plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/uninstall.ts)_

## `orbit-pdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ orbit-pdf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ orbit-pdf plugins:unlink
  $ orbit-pdf plugins:remove
```

## `orbit-pdf plugins:update`

Update installed plugins.

```
USAGE
  $ orbit-pdf plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/update.ts)_
<!-- commandsstop -->
