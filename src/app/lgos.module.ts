import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatRadioModule, MatSidenavModule, MatTabsModule, MatExpansionModule, MatListModule, MatTooltipModule, MatSliderModule } from '@angular/material';import { lgosRootComponent } from './lgos-root.component';
import { LoginFormComponent } from './views/login-form/login-form.component';
import { RegisterFormComponent } from './views/register-form/register-form.component';
import { DrawFormComponent } from './views/draw-form/draw-form.component';
import { InputFileComponent } from './infrastract/input-file/input-file.component';
import { LgosDraggableDirective } from './views/draw-form/directives/lgos-draggable.directive';
import { SortableDirective } from './views/draw-form/directives/lgos-sortable.directive';
//import { ToolsComponent } from './views/draw-form/tools/tools.component';
import { DeleteComponent } from './views/draw-form/tools/delete/delete.component';
import { ResizeToolComponent } from './views/draw-form/tools/resize/lgos-resize-tool.component';
import { LgosColorPickerComponent } from './views/draw-form/tools/color-picker/lgos-color-picker.component';
import { TextDirectionComponent } from './views/draw-form/tools/text-direction/text-direction.component';

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
    ResizeToolComponent,
    LgosColorPickerComponent,
    TextDirectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatTooltipModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [lgosRootComponent]
})
export class LgosModule { }
