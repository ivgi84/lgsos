import { NgModule } from '@angular/core';
import { LgosInfrastructModule } from '../../infrastract/infrastruct.module';
import { RegisterFormComponent } from './register-form.component';

@NgModule({
  declarations:[RegisterFormComponent],
    imports:[
        LgosInfrastructModule
    ],
    providers:[]
})

export class LgosRegistrationModule{}
