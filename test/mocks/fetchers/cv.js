const validator = require('validator')

async function fetchCv ({ url, lastPage }) {
  if (url && !validator.isURL(url)) {
    return Promise.reject(new Error('Url is not valid'))
  }
  if (lastPage && isNaN(lastPage)) { return Promise.reject(new Error('Last page is not valid')) }
  return Promise.resolve('Resume is successfully converted and downloaded')
}

module.exports = {
  fetchCv
}
