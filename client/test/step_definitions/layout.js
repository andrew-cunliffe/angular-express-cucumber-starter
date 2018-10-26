const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Then(/^the browser title should be "([^"]*)"$/, function (titleText) {
    return Promise.resolve(browser.getTitle())
        .then((actualTitle) => expect(actualTitle).to.equal(titleText));
});

Then(/^(?:on the "([^"]*)" element )?there is (?:a|an) ([^\s]*) element that contains the text "([^"]*)"/, function (parentElement, targetElement, expectedText) {
    return Promise.resolve(element(by.css(parentElement ? parentElement : 'html')))
        .then((parent) => parent.element(by.cssContainingText(targetElement, expectedText)))
        .then((target) => target.isPresent())
        .then((present) => expect(present, `${targetElement} with '${expectedText}' text not found`).to.be.true);
});
