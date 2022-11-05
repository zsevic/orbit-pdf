const {Command, flags} = require('@oclif/command')
const chalk = require('chalk')
const {fetchResume} = require('../services/fetch-resume')

class ConvertCommand extends Command {
  async run() {
    const {flags} = this.parse(ConvertCommand)
    try {
      const result = await fetchResume(flags)
      this.log(chalk.green(result))
    } catch (error) {
      this.log(chalk.red(error.message))
    }
  }
}

ConvertCommand.description = `Converts html resume to pdf
...
Converts html resume to pdf and downloads it
`

ConvertCommand.flags = {
  url: flags.string({char: 'u', description: 'html resume url'}),
  path: flags.string({
    char: 'p',
    description: 'path for downloaded pdf resume',
  }),
  lastPage: flags.string({
    char: 'l',
    description: 'last page to print',
  }),
  format: flags.string({
    char: 'f',
    description: 'format, example: A3',
  }),
  scale: flags.string({
    char: 's',
    description: 'scale, example: 1',
  }),
}

module.exports = ConvertCommand
