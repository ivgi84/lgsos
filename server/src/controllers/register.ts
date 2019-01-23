import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);
console.log('register controller start');
export class RegisterController {
    constructor() {}
    // @ts-ignore
    public registerUser(req: Request, res: Response) {
        //console.log('Register user request', req);
        const nUser = new User(req.body);
        console.log('nUser: ', nUser);
        nUser.save().then(response => {
            res.json(response)
        }).catch(err => {
            res.json(err);
        })
        // nUser.save((err, user) => {
        //     if (err) {
        //         console.log('err ',err);
        //         res.send(err);
        //     }
        //     console.log('user ',user)
        //     res.json(user);
        // });
    }
}


