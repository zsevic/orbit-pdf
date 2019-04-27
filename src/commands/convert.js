const { Command, flags } = require('@oclif/command')
const chalk = require('chalk')
const { fetchCv } = require('../fetchers/cv')

class ConvertCommand extends Command {
  async run () {
    const {
      flags: { url, path, lastPage }
    } = this.parse(ConvertCommand)

    await fetchCv({ url, path, lastPage })
      .then(res => {
        this.log(chalk.green(res))
      })
      .catch(error => {
        this.log(chalk.red(error))
      })
  }
}

ConvertCommand.description = `Converts html resume to pdf
...
Converts html resume to pdf and downloads it
`

ConvertCommand.flags = {
  url: flags.string({ char: 'u', description: 'html resume url' }),
  path: flags.string({
    char: 'p',
    description: 'path for downloaded pdf resume'
  }),
  lastPage: flags.string({
    char: 'l',
    description: 'last page to print'
  })
}

module.exports = ConvertCommand
