import {Command, Flags} from '@oclif/core'
import chalk from 'chalk'
import validator from 'validator'

import {fetchResume} from '../../services/fetch-resume'

export default class ConvertCommand extends Command {
  static description = `Converts html resume to pdf
  ...
  Converts html resume to pdf and downloads it
  `

  static flags = {
    format: Flags.string({
      char: 'f',
      description: 'format, example: A3',
    }),
    lastPage: Flags.string({
      char: 'l',
      description: 'last page to print',
    }),
    path: Flags.string({
      char: 'p',
      description: 'path for downloaded pdf resume',
    }),
    scale: Flags.string({
      char: 's',
      description: 'scale, example: 1',
    }),
    url: Flags.string({char: 'u', description: 'html resume url'}),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(ConvertCommand)
    try {
      this.validateFlags(flags)
      const result = await fetchResume(flags)
      this.log(chalk.green(result))
    } catch (error) {
      this.log(chalk.red(error.message))
    }
  }

  validateFlags(params: Record<string, any>): void {
    const {lastPage, scale, url} = params;
    if (url && !validator.isURL(url)) {
      throw new Error('Url is not valid')
    }

    if (lastPage && Number.isNaN(lastPage)) {
      throw new Error('Last page is not valid')
    }

    if ((scale && Number.isNaN(scale)) || (!Number.isNaN(scale) && scale <= 0)) {
      throw new Error('Scale is not valid')
    }
  }
}