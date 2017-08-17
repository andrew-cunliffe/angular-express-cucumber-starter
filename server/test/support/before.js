const nock = require('nock');

const { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ registerHandler, Before }) {
    registerHandler('BeforeFeature', function (event, next) {
        nock.disableNetConnect();
        nock.enableNetConnect(/localhost|127.0.0.1/);
        next();
    });

    Before(function (scenario, next) {
        nock.cleanAll();
        next();
    });
});
