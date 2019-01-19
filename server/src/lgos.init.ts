//comporession ??? gzip
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from "body-parser";
import * as cors from "cors";

//import routes
import { LgosRouter } from '../src/routes/index';
import { Services } from './services/index';
import { LgosConfig } from './config/config';


class LgOverlayApp {
    
    app: express.Application;
    services:any;
    appConfig:any;
    lgosRouter:LgosRouter;
    cors:any;

    constructor(){
        this.app = express();
        this.appConfig = LgosConfig.config;
        this.services = new Services().services;
        console.log('services:', this.services);
        this.lgosRouter = new LgosRouter();
        this.cors = cors;
    }

    initApp(){
        console.log('Service initialization process has been started')

        const PORT = process.env.PORT || this.appConfig.defaultPort;
        const DIST_FOLDER = path.join(__dirname, '../../public/assets');
        console.log(`DISTANATION FOLDER: ${DIST_FOLDER}`);

        this.app.use(this.cors());

        this.app.use('/api', this.lgosRouter.router);

        this.config(DIST_FOLDER, PORT);

        this.app.get('*',(req:any, res:any) =>{
            res.sendFile(`${DIST_FOLDER}/index.html`);
        });

        this.app.listen(PORT, () => {
            console.log('Lg Overlay server us up and running on port ' + PORT);
        });
    }

    private config(distFolder:string, port:string): void{
        
        this.app.use(bodyParser.json());// support application/json type post data
        this.app.use(bodyParser.urlencoded({ extended: false }));//support application/x-www-form-urlencoded post data

        this.app.set('view engine', 'html');
        this.app.use(express.static(distFolder));
        this.app.set('port', port);
    }

}

export default new LgOverlayApp();
