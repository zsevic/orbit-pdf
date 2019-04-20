const {Command, flags} = require('@oclif/command')
const puppeteer = require('puppeteer')
const chalk = require('chalk')

class ConvertCommand extends Command {
  async run() {
    const {
      flags: {url, path, lastPage},
    } = this.parse(ConvertCommand)

    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
    })
    const page = await browser.newPage()
    await page.goto(url || 'https://sevic.me/resume').catch(() => {
      // this.log(chalk.red('Url is not valid'))
      throw new Error(chalk.red('Url is not valid'))
    })

    await page.emulateMedia('screen')

    /* await page.evaluate(() => {
      let sections = document.querySelectorAll('.section')
      sections[4].insertAdjacentHTML('beforebegin', '<br><br>')
    }) */

    await page
    .pdf({
      path: path || 'ZeljkoSevicCV.pdf',
      format: 'A3',
      scale: 1,
      pageRanges: `1-${lastPage || 1}`,
      printBackground: true,
    })
    .then(() => {
      this.log(chalk.green('Resume is successfully converted and downloaded'))
    })
    .catch(() => {
      this.log(chalk.red("Resume couldn't be converted"))
    })

    await browser.close()
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
}

module.exports = ConvertCommand
