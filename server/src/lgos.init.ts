// comporession ??? gzip
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
// const cors = require('cors');

// import routes
// import apiRouter from './routes/api';
import { LgosConfig } from './config/config';
import authRouter from './routes/auth';


class LgOverlayApp {
    public app: express.Application;
    router: any;
    appConfig: any;
    cors: any;

    constructor() {
        console.log('Service initialization process has been started');

        this.app = express();
        this.router = express.Router();
        this.appConfig = LgosConfig.config;
        this.config();
        this.app.use('/api/auth', authRouter );
    }
    private config(): void {
        console.log('config init');
        const PORT = process.env.PORT || this.appConfig.defaultPort;
        const DIST_FOLDER = path.join(__dirname, '../../assets');
        console.log(`DISTANATION FOLDER: ${DIST_FOLDER}`);
        //
        // // this.app.use(cors()); // only for dev
        this.app.use(bodyParser.json()); // support application/json type post data
        this.app.use(bodyParser.urlencoded({ extended: false })); // support application/x-www-form-urlencoded post data

        this.app.set('view engine', 'html');
        this.app.use(express.static(DIST_FOLDER));
        this.app.set('port', PORT);
        // this.app.get('*', (req: any, res: any) => {
        //     res.sendFile(`${DIST_FOLDER}/index.html`);
        // });
    }
}

export default new LgOverlayApp().app;
