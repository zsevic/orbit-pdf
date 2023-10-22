import {Command, Flags} from '@oclif/core'
import validator from 'validator'

import {CliFlags} from '../../flags'
import {fetchResume} from '../../services/resume'

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
      this.log(result)
    } catch (error) {
      this.log(error instanceof Error ? error.message : `Unexpected error ${error}`)
    }
  }

  validateFlags(cliFlags: CliFlags): void {
    const {lastPage, scale, url} = cliFlags;
    if (url && !validator.isURL(url)) {
      throw new Error('Url is not valid')
    }

    if (lastPage && Number.isNaN(Number(lastPage))) {
      throw new Error('Last page is not valid')
    }

    if ((scale && Number.isNaN(Number(scale))) || (!Number.isNaN(Number(scale)) && Number(scale) <= 0)) {
      throw new Error('Scale is not valid')
    }
  }
}
