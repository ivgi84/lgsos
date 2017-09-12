import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { lgosRootComponent } from './lgos-root.component';

@NgModule({
  declarations: [
    lgosRootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [lgosRootComponent]
})
export class lgosModule { }
