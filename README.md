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
@zsevic/orbit-pdf/2.0.0 linux-x64 node-v20.6.0
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
<!-- commandsstop -->
