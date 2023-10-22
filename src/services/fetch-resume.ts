import chalk from 'chalk'
import {launch} from 'puppeteer'

export async function fetchResume(params: Record<string, any>): Promise<string> {
  const {format, lastPage, path, scale, url} = params;
  const browser = await launch({
    args: ['--no-sandbox'],
  })
  const page = await browser.newPage()
  await page.goto(url || 'https://sevic.dev/resume').catch(() => {
    throw new Error(chalk.red('Url is not valid'))
  })

  await page.emulateMediaType('screen')

  await page.pdf({
    format: format || 'A3',
    pageRanges: `1-${lastPage || 1}`,
    path: path || 'ZeljkoSevicCV.pdf',
    printBackground: true,
    scale: scale ? Number.parseFloat(scale) : 1,
  })

  await browser.close()

  return 'Resume is successfully converted and downloaded'
}
