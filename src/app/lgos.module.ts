import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdRadioModule, MdSidenavModule, MdTabsModule } from '@angular/material';
import { lgosRootComponent } from './lgos-root.component';
import { LoginFormComponent } from './views/login-form/login-form.component';
import { RegisterFormComponent } from './views/register-form/register-form.component';
import { DrawFormComponent } from './views/draw-form/draw-form.component';
import { InputFileComponent } from './infrastract/input-file/input-file.component';
import { LgosDraggableDirective } from './views/draw-form/directives/lgos-draggable.directive';
import { SortableDirective } from './views/draw-form/directives/sortable.directive';

@NgModule({
  declarations: [
    lgosRootComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DrawFormComponent,
    InputFileComponent,
    LgosDraggableDirective,
    SortableDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdRadioModule,
    MdSidenavModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [lgosRootComponent]
})
export class LgosModule { }
