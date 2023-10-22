import {expect, test} from '@oclif/test'
import * as sinon from 'sinon'

import * as resumeService from '../../../src/services/resume'

describe('Convert command', () => {
  const successMessage = 'Resume is successfully converted and downloaded'
  let stub: sinon.SinonStub

  before(() => {
    stub = sinon.stub(resumeService, 'fetchResume').returns(Promise.resolve(successMessage))
  })

  after(() => {
    stub.restore()
  })

  test
    .stdout()
    .command(['convert', '--url', 'https://sevic.dev/resume', '--path', 'ZeljkoSevicCV.pdf', '--lastPage', '1'])
    .it('should convert and download resume when all arguments are valid', (ctx) =>
      expect(ctx.stdout).to.contain(successMessage),
    )

  test
    .stdout()
    .command(['convert', '--url', 'https://sevic.dev/resume'])
    .it('should convert and download resume when valid url is provided', (ctx) =>
      expect(ctx.stdout).to.contain(successMessage),
    )

  test
    .stdout()
    .command(['convert', '--lastPage', '2'])
    .it('should convert and download default resume when only last page argument is provided', (ctx) =>
      expect(ctx.stdout).to.contain(successMessage),
    )

  test
    .stdout()
    .command(['convert', '--lastPage', 'test'])
    .it('should throw an error when last page argument is not valid', (ctx) =>
      expect(ctx.stdout).to.contain('Last page is not valid'),
    )

  test
    .stdout()
    .command(['convert', '--scale', '-1'])
    .it('should throw an error when scale argument is not valid', (ctx) =>
      expect(ctx.stdout).to.contain('Scale is not valid'),
    )

  test
    .stdout()
    .command(['convert', '--url', 'test'])
    .it('should throw an error when url argument is not valid', (ctx) =>
      expect(ctx.stdout).to.contain('Url is not valid'),
    )
})
