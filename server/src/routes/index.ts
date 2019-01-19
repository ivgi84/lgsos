import * as Router from 'express';

import {AuthRouter} from './auth';
import { FontRouter } from './fonts';

export class LgosRouter{

    router;
    authRouter;
    fontsRouter;

    constructor(){
        console.log('Building routes');
        this.router = Router();
        
        this.authRouter = new AuthRouter();
        this.fontsRouter = new FontRouter()
        
        this.setRoutes();

    }

    setRoutes(){
        this.router.use('/auth', this.authRouter.router);
        this.router.use('/fonts', this.fontsRouter.router)    
    }

}