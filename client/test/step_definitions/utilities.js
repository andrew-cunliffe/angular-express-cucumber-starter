const fs = require('fs');
const path = require('path');

const { Given, When, Then } = require('cucumber');

Then(/^I pause for a minute$/, { timeout: 60000 }, function (next) {
    setTimeout(next, 60000);
});

Then(/^take a screenshot and call it "([^"]*)"$/, function (fileName) {
    return Promise.resolve(browser.takeScreenshot())
        .then((data) => {
            let screenshotDir = path.join('test', 'screenshots.tmp');

            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir);
            }

            let stream = fs.createWriteStream(path.join(screenshotDir, fileName));
            stream.write(new Buffer(data, 'base64'));
            stream.end();
        });
});
