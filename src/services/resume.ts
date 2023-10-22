import {PaperFormat, launch} from 'puppeteer'

import { CliFlags } from '../flags';

export async function fetchResume(cliFlags: CliFlags): Promise<string> {
  const {format, lastPage, path, scale, url} = cliFlags;
  const browser = await launch({
    args: ['--no-sandbox'],
    headless: "new",
  })
  const page = await browser.newPage()
  await page.goto(url || 'https://sevic.dev/resume').catch(() => {
    throw new Error('Url is not valid')
  })

  await page.emulateMediaType('screen')

  await page.pdf({
    format: format as PaperFormat || 'A3',
    pageRanges: `1-${lastPage || 1}`,
    path: path || 'ZeljkoSevicCV.pdf',
    printBackground: true,
    scale: scale ? Number.parseFloat(scale) : 1,
  })

  await browser.close()

  return 'Resume is successfully converted and downloaded'
}
