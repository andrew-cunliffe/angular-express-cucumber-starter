const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ AfterFeature, After }) {
    After(function (scenario) {
        if (scenario.isFailed()) {
            let name = scenario.scenario.name;
            let tags = scenario.scenario.tags;
            name = name.toLowerCase();
            name = name.replace(/[^a-z|0-9|\-|\s]/g, ' ');
            name = name.replace(/\s+/g, '-');

            return Promise.resolve()
                .then(() => browser.takeScreenshot())
                .then((data) => {
                    let screenshotDir = path.join('test', 'screenshots.tmp', ...tags.map((tag) => tag.name.replace('@', '')));

                    shell.mkdir('-p', screenshotDir);

                    let stream = fs.createWriteStream(path.join(screenshotDir, `${name}.png`));
                    stream.write(new Buffer(data, 'base64'));
                    stream.end();
                })
                .then(() => browser.manage().logs())
                .then((logs) => logs.get('browser'))
                .then((logs) => console.log(`Console info\n\n${logs.map((log) => log.message).join('\n\n')}\n`));
        }
    });

    After(function () {
        return Promise.resolve()
            .then(() => browser.manage().logs())
            .then((logs) => logs.get('browser'))
            .then((logs) => logs.filter((log) => log.level.value > 900 && log.message.indexOf(process.env.API_SERVER) === -1))
            .then((logs) => {
                if (logs.length) {
                    throw new Error(`Console errors have occurred\n\n${logs.map((log) => log.message).join('\n\n')}\n`);
                }
            });
    });
});
