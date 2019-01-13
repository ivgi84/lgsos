import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMaterialsModule } from '../../infrastract/google-materials.module';

import { RegisterFormComponent } from './register-form.component';

@NgModule({
  declarations:[RegisterFormComponent],
    imports:[
        CommonModule,
        GoogleMaterialsModule
    ],
    providers:[]
})

export class LgosRegistrationModule{}
