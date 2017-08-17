const shards = process.env.TEST_SHARDS || 4;

exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    baseUrl: 'http://localhost:8080/',
    disableChecks: true,

    specs: [
        './features/**/*.feature'
    ],

    cucumberOpts: {
        format: 'pretty',
        require: './**/*.js',
        tags: '~@Ignore'
    },

    directConnect: true,
    rootElement: 'app-root',

    capabilities: {
        browserName: 'chrome',
        logName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1920,1080']
        },
        shardTestFiles: shards > 1,
        maxInstances: shards
    },

    afterLaunch: () => new Promise((resolve) => setTimeout(() => resolve(), 1000))
};
