const { expect, test } = require('@oclif/test')

describe('convert', () => {
  test
    .stdout()
    .command(['convert'])
    .it('runs convert', ctx => {
      expect(ctx.stdout).to.contain(
        'Resume is successfully converted and downloaded'
      )
    })

  test
    .stdout()
    .command(['convert', '--url', 'https://sevic.me/resume'])
    .it(
      'runs convert --url https://sevic.me/resume --path ZeljkoSevic.pdf --lastPage 1',
      ctx => {
        expect(ctx.stdout).to.contain(
          'Resume is successfully converted and downloaded'
        )
      }
    )
})
