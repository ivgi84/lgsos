import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);
console.log('register controller start');
export class RegisterController {
    // @ts-ignore
    public registerUser(req: Request, res: Response) {
        console.log('request received', req);
        res.json('register route works')
        // const nUser = new User(req.body);
        // nUser.save((err, user) => {
        //     if (err) {
        //         res.send(err);
        //     }
        //     res.json(user);
        // });
    }
}


