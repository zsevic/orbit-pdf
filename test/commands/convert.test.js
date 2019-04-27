const { expect, test } = require('@oclif/test')
const mock = require('mock-require')

describe('convert', () => {
  before(() => {
    mock('../../src/fetchers/cv', '../mocks/fetchers/cv')
  })

  after(() => {
    mock.stop('../../src/fetchers/cv', '../mocks/fetchers/cv')
  })

  test
    .stdout()
    .command([
      'convert',
      '--url',
      'https://sevic.me/resume',
      '--path',
      'ZeljkoSevicCV.pdf',
      '--lastPage',
      '1'
    ])
    .it('runs convert', ctx => {
      expect(ctx.stdout).to.contain(
        'Resume is successfully converted and downloaded'
      )
    })

  test
    .stdout()
    .command(['convert', '--url', 'https://sevic.me/resume'])
    .it('runs convert', ctx => {
      expect(ctx.stdout).to.contain(
        'Resume is successfully converted and downloaded'
      )
    })

  test
    .stdout()
    .command(['convert', '--lastPage', '2'])
    .it('runs convert', ctx => {
      expect(ctx.stdout).to.contain(
        'Resume is successfully converted and downloaded'
      )
    })

  test
    .stdout()
    .command(['convert', '--lastPage', 'test'])
    .it('runs convert', ctx => {
      expect(ctx.stdout).to.contain('Last page is not valid')
    })

  test
    .stdout()
    .command(['convert', '--url', 'test'])
    .it('runs convert', ctx => {
      expect(ctx.stdout).to.contain('Url is not valid')
    })
})
