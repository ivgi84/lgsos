import { Routes } from '@angular/router';
import { DrawFormComponent } from './views/draw-form/draw-form.component';


let appRoutes: Routes = [
    {
        path: 'draw',
        component: DrawFormComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren:'./views/login/login.module#LgLoginModule'
    },
    {
        path: 'register',
        loadChildren:'./views/register/registration.module#LgRegistrationModule'
    },
    {
        path: '**',
        redirectTo: '/draw',
        pathMatch: 'full'
    },
];

export const routes: Routes = appRoutes;