import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//routing
import { AppRoutingModule } from './lgos.router.module';

import{ SharedModule } from './shared/shared.module';
import { LgosInfrastructModule } from './infrastract/infrastruct.module';
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
    HttpClientModule,
    SharedModule,
    LgosInfrastructModule,
    LgosDrawModule,
    LgosLoginModule,
    LgosRegistrationModule
  ],
  bootstrap: [lgosRootComponent]
})
export class LgosModule { }
