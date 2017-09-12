import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { lgosRootComponent } from './lgos-root.component';
import { LoginFormComponent } from './views/login-form/login-form.component';

@NgModule({
  declarations: [
    lgosRootComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [lgosRootComponent]
})
export class LgosModule { }
