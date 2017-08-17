const { defineSupportCode } = require('cucumber');
const { expect } = require('chai');

defineSupportCode(({ Given, When, Then }) => {
    Given(/^I( attempt to)? navigate to the "([^"]*)" page$/, function (attempt, url) {
        return Promise.resolve(browser.get(url))
            .then(() => browser.waitForAngular())
            .then(() => {
                if (!attempt) {
                    return Promise.resolve(browser.getCurrentUrl())
                        .then((actualUrl) => expect(actualUrl).to.equal(this.baseUrl + url));
                }
            })
    });

    When(/^I reload the page$/, function () {
        return Promise.resolve(browser.getCurrentUrl())
            .then((expectedUrl) =>
                Promise.resolve(browser.refresh())
                    .then(() => browser.getCurrentUrl())
                    .then((actualUrl) => expect(actualUrl).to.equal(expectedUrl))
            );
    });

    Then(/^I should be on the "([^"]*)" page$/, function (expectedUrl) {
        return Promise.resolve(browser.getCurrentUrl())
            .then((actualUrl) => expect(actualUrl).to.equal(this.baseUrl + expectedUrl));
    });
});
