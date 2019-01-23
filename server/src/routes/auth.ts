import { Router } from 'express';
import { RegisterController } from '../controllers/register';

console.log('import ', RegisterController);

class AuthRouter {

    router;
    registerController: RegisterController;

    constructor() {
        this.router = Router();
        this.registerController = new RegisterController();
        this.setRoutes.call(this);
    }
    setRoutes() {
        this.router.post('/register/new', (req, res) => {
            this.registerController.registerUser(req, res);
        });
    }
}

export default new AuthRouter().router;
