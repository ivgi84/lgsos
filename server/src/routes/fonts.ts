import { Router } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as _ from 'lodash';
import { Request } from '../infrastruct/request';
import * as formidable from 'formidable';
const fontManager = require('font-manager');
export class FontRouter{
    router: Router;
    fontManager:any;
    formidable:any;
    readonly packageJson = require('../../../package.json');

    constructor(){
        this.router = Router();
        this.fontManager = fontManager;
        this.formidable = formidable;
        this.setRoutes();
        
    }

    geLocalHandler(req:any, res:any){
        this.fontManager.getAvailableFonts((fonts:Array<object>) =>{
            res.send(fonts)
        })
    }
    getGfonts(req:any, res:any){
        const apiKey = 'AIzaSyBmSQ5KA1fnYEIE65jrA3H4HJELjJzIb_M';
        const apiUrl ='https://www.googleapis.com/webfonts/v1/webfonts?key=';

        let requestUrl, request, requestOptions='';
        if(req.options){
            _.each(req.options, (val, key)=>{
                requestOptions += `&${key}=${val}`
            });
        }
        requestUrl = `${apiUrl}${apiKey}${requestOptions}`;
        
        console.log(requestUrl);
        let options = {
            method:'GET',
            url: requestUrl,
            json:true
        }
        request = new Request(5000, options);

        request.request(options).then(response=>{
            res.send(response);
        })
    }
    uploadFont(){
        let form = this.formidable.IncomingForm();
        form.multiples = true;
        form.uploadDir  = path.join(__dirname, '../uploads');
        form.uploadDirFonts = form.uploadDir + '/fonts';

        //todo check if folders exist

        form.on('file', (field:any, file:any)=>{
            try{
                fs.rename(file.path, path.join(form.uploadDirFonts, file.name), this.errorHandler.bind(this));
                console.log('file was successfuly uploaded');
            }
            catch(error){
                console.log('failed to move file to directory, error'+ error);
            }
        });
    }

    errorHandler(){
        console.log('error')
    }

    setRoutes() {
        this.router.get('/local', this.geLocalHandler.bind(this));
        this.router.get('/gfonts', this.getGfonts.bind(this));
        this.router.get('/upload', this.uploadFont.bind(this));
    }
}
