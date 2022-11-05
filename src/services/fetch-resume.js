const chalk = require('chalk')
const puppeteer = require('puppeteer')

async function fetchResume({url, path, lastPage, format, scale}) {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
  })
  const page = await browser.newPage()
  await page.goto(url || 'https://sevic.dev/resume').catch(() => {
    throw new Error(chalk.red('Url is not valid'))
  })

  await page.emulateMediaType('screen')

  await page.pdf({
    path: path || 'ZeljkoSevicCV.pdf',
    format: format || 'A3',
    scale: scale ? Number.parseFloat(scale) : 1,
    pageRanges: `1-${lastPage || 1}`,
    printBackground: true,
  })

  await browser.close()

  return 'Resume is successfully converted and downloaded'
}

module.exports = {
  fetchResume,
}
