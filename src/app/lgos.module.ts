import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdRadioModule, MdSidenavModule, MdTabsModule, MdExpansionModule, MdListModule } from '@angular/material';import { lgosRootComponent } from './lgos-root.component';
import { LoginFormComponent } from './views/login-form/login-form.component';
import { RegisterFormComponent } from './views/register-form/register-form.component';
import { DrawFormComponent } from './views/draw-form/draw-form.component';
import { InputFileComponent } from './infrastract/input-file/input-file.component';
import { LgosDraggableDirective } from './views/draw-form/directives/lgos-draggable.directive';
import { SortableDirective } from './views/draw-form/directives/sortable.directive';
//import { ToolsComponent } from './views/draw-form/tools/tools.component';
import { DeleteComponent } from './views/draw-form/tools/delete/delete.component';
import { ResizeToolComponent } from './views/draw-form/tools/resize/lgos-resize-tool.component';

@NgModule({
  declarations: [
    lgosRootComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DrawFormComponent,
    InputFileComponent,
    LgosDraggableDirective,
    SortableDirective,
    //ToolsComponent,
    DeleteComponent,
    ResizeToolComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule,
    MdInputModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdRadioModule,
    MdSidenavModule,
    MdTabsModule,
    MdExpansionModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [lgosRootComponent]
})
export class LgosModule { }
