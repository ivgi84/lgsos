import { Routes } from '@angular/router';
import { DrawFormComponent } from './views/draw-form/draw-form.component';
import { LoginFormComponent } from './views/login/login-form.component';
import { RegisterFormComponent } from './views/register/register-form.component';

let appRoutes: Routes = [
    {
        path: 'draw',
        component: DrawFormComponent
    },
    {
        path: 'login',
        component:LoginFormComponent
    },
    {
        path: 'register',
        component: RegisterFormComponent
    },
    {
        path: '',
        redirectTo: '/draw',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/draw',
        pathMatch: 'full'
    }
];

export const routes: Routes = appRoutes;