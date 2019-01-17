
//comporession ??? gzip
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from "body-parser";

//import routes
//import { LgosRouter } from '../src/routes';
//import { Services } from './services';
//import { LgosConfig } from './config';
//import { LogSeverityLevels } from './services/enums/log-security.levels';


class LgosApp {
    
    app: express.Application;
    services:any;
    //lgosRouter:LgosRouter;

    constructor(){
        this.app = express();
        //this.services = new Services().services;
        //this.lgosRouter = new LgosRouter();
        //this.lgosRouter.setRoutes();
    }

    initApp(){
        //this.services.logger.logJson('Service initialization process has been started');
        console.log('Service initialization process has been started')

        const PORT = process.env.PORT || 4000;
        const DIST_FOLDER = path.join(__dirname, '../../public/assets');
        console.log(`DISTANATION FOLDER: ${DIST_FOLDER}`);


        //this.app.use('/api', this.lgosRouter.router);

        this.config(DIST_FOLDER, PORT);

        this.app.get('*',(req, res) =>{
            res.sendFile(`${DIST_FOLDER}/index.html`);
        });

        this.app.listen(PORT, () => {
            console.log('Landing Pages server us up and running on port ' + PORT);
            //this.services.logger.logJson(LogSeverityLevels.info, { message: 'Server is listening on port: ' + PORT });
        });
    }

    private config(distFolder, port): void{
        
        this.app.use(bodyParser.json());// support application/json type post data
        this.app.use(bodyParser.urlencoded({ extended: false }));//support application/x-www-form-urlencoded post data

        this.app.set('view engine', 'html');
        this.app.use(express.static(distFolder));
        this.app.set('port', port);
    }

}

export default new LgosApp();



