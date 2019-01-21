import { Request, Response } from 'express';

export class Routes{
    public routes(app):void{
        app.route('/api')
        .get((req: Request, res: Response)=>{
            res.status(200).send({
                message:'GET request success!'
            })
        })
    }
}