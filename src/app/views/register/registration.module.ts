import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LgosInfrastructModule } from '../../infrastract/infrastruct.module';
import { RegisterFormComponent } from './register-form.component';
import { GoogleMaterialsModule } from '../../infrastract/google-materials.module';


@NgModule({
  declarations:[RegisterFormComponent],
    imports:[
        CommonModule,
        LgosInfrastructModule,
        GoogleMaterialsModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    providers:[]
})

export class LgosRegistrationModule{}
