const validator = require('validator')

async function fetchResume({url, lastPage}) {
  if (url && !validator.isURL(url)) {
    throw new Error('Url is not valid')
  }
  if (lastPage && isNaN(lastPage)) {
    throw new Error('Last page is not valid')
  }
  return 'Resume is successfully converted and downloaded'
}

module.exports = {
  fetchResume,
}
