import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMaterialsModule } from '../../infrastract/google-materials.module';

import { LoginFormComponent } from './login-form.component';


@NgModule({
    declarations:[
        LoginFormComponent
    ],
    imports:[
        CommonModule,
        GoogleMaterialsModule
    ],
    providers:[]    
})

export class LgosLoginModule{}