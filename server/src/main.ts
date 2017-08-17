import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

import { config } from './config';
import { DemoController } from './controllers/demo';

const app: express.Application = express();
const router: express.Router = express();

/*
 * Configure security elements
 */
app.disable('x-powered-by');

/*
 * Register routing endpoints
 */
app.use('/api/v1/', router);
app.use(express.static(path.join(__dirname, '../client')));

/*
 * Start controllers
 */
const demo = new DemoController(router);

/*
 * Create the server
 */
const server = http.createServer(app);
const port = process.env['PORT'] || config.port;

server.listen(port);
server.on('listening', listening);

function listening() {
    const addr = server.address();
    console.log(`Listening on ${addr.address}:${addr.port}`);
}

module.exports = app;
