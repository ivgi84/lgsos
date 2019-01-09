import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//routing
import { AppRoutingModule } from './lgos.router.module';

import { lgosRootComponent } from './lgos-root.component';

import { DrawFormComponent } from './views/draw-form/draw-form.component';
import { InputFileComponent } from './infrastract/input-file/input-file.component';
import { LgosDraggableDirective } from './views/draw-form/directives/lgos-draggable.directive';
import { SortableDirective } from './views/draw-form/directives/lgos-sortable.directive';
import { ToolsComponent } from './views/draw-form/tools/tools.component';
import { DeleteComponent } from './views/draw-form/tools/delete/delete.component';
import { ResizeToolComponent } from './views/draw-form/tools/resize/lgos-resize-tool.component';
import { LgosColorPickerComponent } from './views/draw-form/tools/color-picker/lgos-color-picker.component';
import { TextDirectionComponent } from './views/draw-form/tools/text-direction/text-direction.component';
import { FontsManagerComponent } from './views/draw-form/tools/fonts-manager/fonts-manager.component' ;
import { DrawService } from './views/draw-form/services/draw-service.service';
import { FontsService } from './views/draw-form/tools/fonts-manager/fonts.service';

import { MatInputModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatRadioModule, MatSidenavModule, MatTabsModule, MatExpansionModule, MatListModule, MatTooltipModule, MatSliderModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    lgosRootComponent,
    DrawFormComponent,
    InputFileComponent,
    LgosDraggableDirective,
    SortableDirective,
    ToolsComponent,
    DeleteComponent,
    ResizeToolComponent,
    LgosColorPickerComponent,
    TextDirectionComponent,
    FontsManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
    MatSliderModule,
    MatSelectModule
  ],
  providers: [DrawService, FontsService],
  bootstrap: [lgosRootComponent]
})
export class LgosModule { }
