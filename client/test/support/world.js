const { defineSupportCode } = require('cucumber');

class World {
    constructor() {
        this.baseUrl = 'http://localhost:8080';
    }
}

defineSupportCode(({ setWorldConstructor }) => setWorldConstructor(World));
defineSupportCode(({ setDefaultTimeout }) => setDefaultTimeout(10 * 1000));
