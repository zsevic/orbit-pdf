const chalk = require('chalk')
const puppeteer = require('puppeteer')
const validator = require('validator')

async function fetchResume({url, path, lastPage, format, scale}) {
  if (url && !validator.isURL(url)) {
    throw new Error('Url is not valid')
  }

  if (lastPage && isNaN(lastPage)) {
    throw new Error('Last page is not valid')
  }

  const scaleParameter = Number(scale);
  if ((scale && Number.isNaN(scaleParameter)) || (!Number.isNaN(scaleParameter) && scaleParameter <= 0)) {
    throw new Error('Scale is not valid')
  }

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
    scale: scaleParameter || 1,
    pageRanges: `1-${lastPage || 1}`,
    printBackground: true,
  })

  await browser.close()

  return 'Resume is successfully converted and downloaded'
}

module.exports = {
  fetchResume,
}
