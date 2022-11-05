const {Command, flags} = require('@oclif/command')
const chalk = require('chalk')
const validator = require('validator')
const {fetchResume} = require('../services/fetch-resume')

class ConvertCommand extends Command {
  validateFlags({url, lastPage, scale}) {
    if (url && !validator.isURL(url)) {
      throw new Error('Url is not valid')
    }

    if (lastPage && isNaN(lastPage)) {
      throw new Error('Last page is not valid')
    }

    if ((scale && isNaN(scale)) || (!isNaN(scale) && scale <= 0)) {
      throw new Error('Scale is not valid')
    }
  }

  async run() {
    const {flags} = this.parse(ConvertCommand)
    try {
      this.validateFlags(flags)
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
