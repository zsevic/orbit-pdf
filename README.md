@zsevic/orbit-pdf
=========

CLI tool for converting [Orbit](https://github.com/sharu725/online-cv) HTML resume to pdf

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@zsevic/orbit-pdf.svg)](https://npmjs.org/package/orbit-pdf)
[![Downloads/week](https://img.shields.io/npm/dw/@zsevic/orbit-pdf.svg)](https://www.npmjs.com/package/@zsevic/orbit-pdf)
[![License](https://img.shields.io/npm/l/@zsevic/orbit-pdf.svg)](https://github.com/zsevic/orbit-pdf/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npx @zsevic/orbit-pdf COMMAND
running command...
$ npx @zsevic/orbit-pdf (-v|--version|version)
@zsevic/orbit-pdf/1.1.3 linux-x64 node-v17.9.1
$ npx @zsevic/orbit-pdf --help [COMMAND]
USAGE
  $ npx @zsevic/orbit-pdf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`npx @zsevic/orbit-pdf convert`](#orbit-pdf-convert)
* [`npx @zsevic/orbit-pdf help [COMMAND]`](#orbit-pdf-help-command)

## `orbit-pdf convert`

Converts html resume to pdf

```
USAGE
  $ npx @zsevic/orbit-pdf convert

OPTIONS
  -f, --format=format      format, example: A3
  -l, --lastPage=lastPage  last page to print
  -p, --path=path          path for downloaded pdf resume
  -s, --scale=scale        scale, example: 1
  -u, --url=url            html resume url

DESCRIPTION
  ...
  Converts html resume to pdf and downloads it
```

## `orbit-pdf help [COMMAND]`

display help for @zsevic/orbit-pdf

```
USAGE
  $ npx @zsevic/orbit-pdf help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
