import { Logger } from '../infrastruct/logger';

console.log('init services');

export class Services {

     _services = {
        logger:{},
    };

    private static _instance: Services = null;

    constructor() {

        if(Services._instance){
            return Services._instance;
        }

        Services._instance = this;
        
        const logger = Logger;        

        this._services.logger = logger;
    }

    public get services(){
        return this._services;
    }
}