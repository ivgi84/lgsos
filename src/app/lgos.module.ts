import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMaterialsModule } from './infrastract/google-materials.module';

//routing
import { AppRoutingModule } from './lgos.router.module';

import { LgosDrawModule } from './views/draw-form/draw.module';
import { LgosLoginModule } from './views/login/login.module';
import { LgosRegistrationModule } from './views/register/registration.module';

import { lgosRootComponent } from './lgos-root.component';

@NgModule({
  declarations: [
    lgosRootComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMaterialsModule,
    LgosDrawModule,
    LgosLoginModule,
    LgosRegistrationModule
  ],
  bootstrap: [lgosRootComponent]
})
export class LgosModule { }
