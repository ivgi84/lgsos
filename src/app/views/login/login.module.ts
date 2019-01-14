import { NgModule } from '@angular/core';
import { LgosInfrastructModule } from '../../infrastract/infrastruct.module';

import { LoginFormComponent } from './login-form.component';


@NgModule({
    declarations:[
        LoginFormComponent
    ],
    imports:[
        LgosInfrastructModule
    ],
    providers:[]    
})

export class LgosLoginModule{}