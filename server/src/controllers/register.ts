import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);
export class RegisterController {
    constructor() {
        console.log('register controller start');
    }
    // @ts-ignore
    public registerUser(req: Request, res: Response) {
        console.log('New user register request, user: ', req.body);
        const nUser = new User(req.body);
        nUser.save().then(response => {
            console.log('success');
            res.json(response)
        }).catch(err => {
            console.log('failure');
            res.json(err);
        });
    }
}


