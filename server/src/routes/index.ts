import * as Router from 'express';
import { Services } from '../services';

import {AuthRouter} from './api';

export class LgosRouter{

    router: Router;
    private services: any;
    authRouter: Router;

    constructor(){
        this.router = Router();
        this.services = new Services().services;

        this.authRouter = new AuthRouter().setRoutes()
    }

    setRoutes(){
        this.router.use('/auth', this.authRouter.router);
    }

}