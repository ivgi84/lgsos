import * as mongoose from 'mongoose';
const Joi = require('joi');

import { UserSchema } from '../models/user';
import { Request, Response } from 'express';
import { HTTPResponse } from '../infrastruct/request';

const User = mongoose.model('User', UserSchema);
export class RegisterController {
    constructor() {
        console.log('register controller start');
    }
    // @ts-ignore
    public registerUser(req: Request, res: Response) {
        console.log('New user register request, user: ', req.body);
        let result = this.validateUserData(req.body);
        
        // nUser.save().then(response => {
        //     console.log('success');
        //     res.json(response)
        // }).catch(err => {
        //     console.log('failure');
        //     res.json(err);
        // });
    }
    private validateUserData(requestBody): Object{
        debugger;
        const result = {
            isSuccess: true,
            body: {}
        };

        if(!requestBody.user){
            result.isSuccess = false;
            result.body =  new HTTPResponse(new Error('User data not found'),'No User data found',null);
        }
        let userData = requestBody.user;

        const validationSchema = Joi.object().keys({
            firstName: Joi.string().min(2).max(20).required(),
            lastName: Joi.string().min(2).max(20).required(),
            email: Joi.string().email().required(),
            password: Joi.string().strip().required(), //strip removes a key after validation
            confirmPassword: Joi.string().strip().required(),
            allowPromoEmail: Joi.boolean().required()
        });

        result.isSuccess = Joi.validate(userData, validationSchema);
        //todo: check

        return result
    }
}


