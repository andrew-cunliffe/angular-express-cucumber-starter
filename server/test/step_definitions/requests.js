const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

When(/^I make a (GET) request to the API endpoint "([^"]*)" as "([^"]*)"$/, function (requestMethod, requestEndpoint, historyName) {
    return Promise.resolve(this.performGet(requestEndpoint, historyName));
});

Then(/^The(?: "([^"]*)")? response from the "([^"]*)" request equals "([^"]*)"/, function (responseObject, historyName, expectedResponse) {
    return Promise.resolve(this.getHistory(historyName))
        .then((history) => history.response)
        .then((response) => expect(expectedResponse).to.equal(response));
});

Then(/^The response(?: path "([^"]*)")? from the "([^"]*)" request contains:/, function (responseObject, historyName, expectedData) {
    expectedData = this.getHashes(expectedData);

    return Promise.resolve(this.getHistory(historyName))
        .then((history) => history.response)
        .then((response) => {
            response = responseObject ? response[responseObject] : response;
            if (response instanceof Array) {
                return Promise.all(expectedData.map((expected, idx) => expect(expected).to.deep.equal(response[idx])));
            } else {
                return expect(expectedData[0]).to.deep.equal(response);
            }
        });
});
