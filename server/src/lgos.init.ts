//comporession ??? gzip
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from "body-parser";
//import * as cors from "cors";

//import routes
//import { LgosRouter } from '../src/routes/index';
import { Routes } from './routes/appRouter';
import { LgosConfig } from './config/config';


class LgOverlayApp {
    
    public app: express.Application;
    public router: Routes = new Routes();

    appConfig:any;
    cors:any;

    constructor(){
        console.log('Service initialization process has been started')

        this.app = express();
        this.router.routes(this.app);
        this.appConfig = LgosConfig.config;
        //this.cors = cors;

        this.config();

    }

    initApp(){
        //this.app.use('/api', this.lgosRouter.router);       
    }

    private config(): void{
        console.log('config11');
        const PORT = process.env.PORT || this.appConfig.defaultPort;
        const DIST_FOLDER = path.join(__dirname, '../../assets');
        console.log(`DISTANATION FOLDER: ${DIST_FOLDER}`);

        //this.app.use(this.cors());//only for dev
        this.app.use(bodyParser.json());// support application/json type post data
        this.app.use(bodyParser.urlencoded({ extended: false }));//support application/x-www-form-urlencoded post data

        this.app.set('view engine', 'html');
        this.app.use(express.static(DIST_FOLDER));
        this.app.set('port', PORT);

        this.app.get('*',(req:any, res:any) =>{
            res.sendFile(`${DIST_FOLDER}/index.html`);
        });
    }

}

export default new LgOverlayApp().app;
