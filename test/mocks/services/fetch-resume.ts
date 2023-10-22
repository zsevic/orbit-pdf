import validator from 'validator'

import {CliFlags} from '../../../src/flags';

export async function fetchResume(cliFlags: CliFlags): Promise<string> {
  const {lastPage, url} = cliFlags;
  if (url && !validator.isURL(url)) {
    throw new Error('Url is not valid')
  }

  if (lastPage && Number.isNaN(lastPage)) {
    throw new Error('Last page is not valid')
  }

  return 'Resume is successfully converted and downloaded';
}
