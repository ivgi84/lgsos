import { Router } from 'express';

import authRouter from './auth';
import fontRouter from './fonts';

class ApiRouter {
    router;
    constructor() {
        this.router = Router();
        this.setRoutes();
    }

    setRoutes() {
        this.router.use('/auth', authRouter );
        this.router.use('/fonts', fontRouter );
    }
}

export default new ApiRouter().router;
