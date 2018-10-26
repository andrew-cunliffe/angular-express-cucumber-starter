const { setWorldConstructor } = require('cucumber');

class World {
    constructor() {
        this.baseUrl = 'http://localhost:8080';
    }
}

setWorldConstructor(World);
