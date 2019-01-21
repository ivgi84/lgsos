import { Router } from 'express';
import { UserSchema } from '../../models/user';

export class AuthRouter {

    router: Router;
    readonly packageJson = require('../../../package.json');

    constructor() {
        this.router = Router();
        this.setRoutes();
    }


    registerHandler(req:any, res:any){
        res.send(JSON.stringify('register route works'));
    }

    setRoutes() {
        this.router.get('/register', this.registerHandler.bind(this));
    }
}