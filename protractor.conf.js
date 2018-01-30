const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    full: './src/specs/*.ts'
  },
  baseUrl: 'https://nx.bimeye.com',
  multiCapabilities: [
    {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['--headless', '--safe-mode', '--disable-gpu',]
      }
    }
  ],
  jasmineNodeOpts: {
    showColors: true
  },
  onPrepare() {
    require('ts-node').register({
      project: 'tsconfig.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
