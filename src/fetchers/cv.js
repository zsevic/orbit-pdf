const puppeteer = require('puppeteer')
const chalk = require('chalk')
const validator = require('validator')

async function fetchCv ({ url, path, lastPage }) {
  if (url && !validator.isURL(url)) {
    return Promise.reject(new Error('Url is not valid'))
  }

  if (lastPage && isNaN(lastPage)) { return Promise.reject(new Error('Last page is not valid')) }

  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  })
  const page = await browser.newPage()
  await page.goto(url || 'https://sevic.me/resume').catch(() => {
    throw new Error(chalk.red('Url is not valid'))
  })

  await page.emulateMedia('screen')

  /* await page.evaluate(() => {
  let sections = document.querySelectorAll('.section')
  sections[4].insertAdjacentHTML('beforebegin', '<br><br>')
  }) */

  await page.pdf({
    path: path || 'ZeljkoSevicCV.pdf',
    format: 'A3',
    scale: 1,
    pageRanges: `1-${lastPage || 1}`,
    printBackground: true
  })

  await browser.close()

  return Promise.resolve('Resume is successfully converted and downloaded')
}

module.exports = {
  fetchCv
}
