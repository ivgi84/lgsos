import { Request, Response } from 'express';
const fontManager = require('font-manager');
import { RequestPromise } from '../infrastruct/request';

export class FontsController {
    fontManager: any;
    constructor() {
        console.log('Fonts controller start');
        this.fontManager = fontManager;
    }
    getLocal(req: Request, res: Response) {
        this.fontManager.getAvailableFonts((fonts: Array<object>) => {
            res.send(fonts)
        })
    }
    getGFonts(req: Request, res: Response) {
        const apiKey = 'AIzaSyBmSQ5KA1fnYEIE65jrA3H4HJELjJzIb_M';
        const apiUrl = 'https://www.googleapis.com/webfonts/v1/webfonts?key=';

        let requestUrl, request, requestOptions = '';

        // @ts-ignore
        if (req.options) {
            // @ts-ignore
            _.each(req.options, (val, key) => {
                requestOptions += `&${key}=${val}`
            });
        }
        requestUrl = `${apiUrl}${apiKey}${requestOptions}`;

        const options = {
            method: 'GET',
            url: requestUrl,
            json: true
        };

        request = new RequestPromise(5000, options);
        request.call().then(response => {
           res.send(response);
        });
    }
}


