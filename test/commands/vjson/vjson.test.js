const {expect, test} = require('@oclif/test')

describe('vjson', () => {
  test
  .stdout()
  .command(['vjson', '--config', 'test/commands/vjson/uc-brave-cli.json', '--path', 'test/commands/vjson/uc.json'])
  .it('runs vjson --config=test/commands/vjson/uc-brave-cli.json --path=test/commands/vjson/uc.json', ctx => {
    expect(ctx.stdout).to.contain('Validation Successful')
  })
})

describe('vjson path config missing', () => {
  test
  .stdout()
  .command(['vjson', '--config', 'test/commands/vjson/uc-brave-cli-one.json', '--path', 'test/commands/vjson/uc-invalid.json'])
  .it('runs vjson --config=test/commands/vjson/uc-brave-cli-one.json --path=test/commands/vjson/uc-invalid.json', ctx => {
    expect(ctx.stdout).to.contain('Error')
  })
})

describe('vjson uppercase success', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '{"json":{"keys":{"uppercase":true}}}', '--pathj', '{"abC":123}'])
  .it('runs vjson --configj={"json":{"keys":{"uppercase":true}}} --pathj={"abC":123}', ctx => {
    expect(ctx.stdout).to.contain('Validation Successful')
  })
})

describe('vjson uppercase failure', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '{"json":{"keys":{"uppercase":false}}}', '--pathj', '{"abC":123}'])
  .it('runs vjson --configj={"json":{"keys":{"uppercase":false}}} --pathj={"abC":123}', ctx => {
    expect(ctx.stdout).to.contain('Validation Failed')
  })
})

describe('vjson lowercase success', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '{"json":{"keys":{"lowercase":true}}}', '--pathj', '{"abC":123}'])
  .it('runs vjson --configj={"json":{"keys":{"lowercase":true}}} --pathj={"abC":123}', ctx => {
    expect(ctx.stdout).to.contain('Validation Successful')
  })
})

describe('vjson lowercase failure', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '{"json":{"keys":{"lowercase":false}}}', '--pathj', '{"ABc":123}'])
  .it('runs vjson --configj={"json":{"keys":{"lowercase":false}}} --pathj={"ABc":123}', ctx => {
    expect(ctx.stdout).to.contain('Validation Failed')
  })
})

describe('vjson hyphen success', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '{"json":{"keys":{"hyphen":true}}}', '--pathj', '{"ab-c":123}'])
  .it('runs vjson --configj={"json":{"keys":{"hyphen":true}}} --pathj={"ab-c":123}', ctx => {
    expect(ctx.stdout).to.contain('Validation Successful')
  })
})

describe('vjson hyphen failure', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '{"json":{"keys":{"hyphen":false}}}', '--pathj', '{"AB-c":123}'])
  .it('runs vjson --configj={"json":{"keys":{"hyphen":false}}} --pathj={"AB-c":123}', ctx => {
    expect(ctx.stdout).to.contain('Validation Failed')
  })
})

describe('vjson underscore success', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '{"json":{"keys":{"underscore":true}}}', '--pathj', '{"ab_c":123}'])
  .it('runs vjson --configj={"json":{"keys":{"underscore":true}}} --pathj={"ab_c":123}', ctx => {
    expect(ctx.stdout).to.contain('Validation Successful')
  })
})

describe('vjson underscore failure', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '{"json":{"keys":{"underscore":false}}}', '--pathj', '{"AB_c":123}'])
  .it('runs vjson --configj={"json":{"keys":{"underscore":false}}} --pathj={"AB_c":123}', ctx => {
    expect(ctx.stdout).to.contain('Validation Failed')
  })
})

describe('vjson digits success', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '{"json":{"keys":{"digits":true}}}', '--pathj', '{"ab1c":123}'])
  .it('runs vjson --configj={"json":{"keys":{"digits":true}}} --pathj={"ab1c":123}', ctx => {
    expect(ctx.stdout).to.contain('Validation Successful')
  })
})

describe('vjson digits failure', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '{"json":{"keys":{"digits":false}}}', '--pathj', '{"AB1c":123}'])
  .it('runs vjson --configj={"json":{"keys":{"digits":false}}} --pathj={"AB1c":123}', ctx => {
    expect(ctx.stdout).to.contain('Validation Failed')
  })
})

describe('vjson path param missing', () => {
  test
  .stdout()
  .command(['vjson', '--configj', '1', '--pathj', '{"AB1c":123}'])
  .it('runs vjson --configj={} --pathj={"AB1c":123}', ctx => {
    expect(ctx.stdout).to.contain('Path Param Missing')
  })
})
