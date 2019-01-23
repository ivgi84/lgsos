import { Router } from 'express';
import { RegisterController } from '../controllers/register';

class AuthRouter {

    router;
    registerController: RegisterController;

    constructor() {
        this.router = Router();
        this.setRoutes.bind(this);
        this.registerController = new RegisterController();
    }
    setRoutes() {
        this.router.post('/register/new',  this.registerController.registerUser);
    }
}

export default new AuthRouter().router;
