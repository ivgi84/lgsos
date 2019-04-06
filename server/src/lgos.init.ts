// comporession ??? gzip
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

// import routes
import apiRouter from './routes/api';
import { LgosConfig } from './config/config';
import { Logger } from './infrastruct/logger';
const addRequestId = require('express-request-id')();

class LgOverlayApp {
    public app: express.Application;
    router: any;
    appConfig: any;
    logger: Logger;
    private static allowCORS(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        next();
    }

    constructor() {
        console.log('Service initialization process has been started');

        this.app = express();
        this.router = express.Router();
        this.appConfig = LgosConfig.config;
        this.logger = new Logger(this.app);
        this.config();        
    }
    private config(): void {
        console.log('config init');
        const PORT = process.env.PORT || this.appConfig.defaultPort;
        const DIST_FOLDER = path.join(__dirname, `../${this.appConfig.distanationFolder}`);
        console.log(`DISTANATION FOLDER: ${DIST_FOLDER}`);

        this.app.use(addRequestId); // adds request id to every request
        this.app.use(bodyParser.json()); // support application/json type post data
        this.app.use(bodyParser.urlencoded({ extended: false })); // support application/x-www-form-urlencoded post data
        this.app.use(express.static(DIST_FOLDER));
        this.app.use(LgOverlayApp.allowCORS);


        this.app.set('view engine', 'html');
        this.app.set('port', PORT);
        this.app.set('logger', this.logger);
        
        
        this.app.use('/api', apiRouter );

        this.app.get('*', (req: any, res: any) => {
            res.sendFile(`${DIST_FOLDER}/index.html`);
        });

    }
    private dbSetup(): void {
        // @ts-ignore
        mongoose.Promise = global.Promise;
        mongoose.connect(this.appConfig.mLabDbConnectionString, { useNewUrlParser: true })
    }
}

export default new LgOverlayApp().app;
