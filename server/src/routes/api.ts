import { Router } from 'express';
import { Services } from '../services';
import { LogSeverityLevels } from '../services/enums/log-security.levels';

export class AuthRouter {

    router: Router;
    readonly packageJson = require('../../../package.json');
    private services: any;

    constructor() {
        this.router = Router();
        this.services = new Services().services;
    }


    registerHandler(){

    }

    setRoutes() {
        this.router.get('/register', this.registerHandler.bind(this));
    }
}