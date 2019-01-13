import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMaterialsModule } from '../../infrastract/google-materials.module';
import { FormsModule } from '@angular/forms';


import { InputFileComponent } from '../../infrastract/input-file/input-file.component';
import { DrawFormComponent } from './draw-form.component';
import { LgosDraggableDirective } from './directives/lgos-draggable.directive';
import { SortableDirective } from './directives/lgos-sortable.directive';
import { ToolsComponent } from './tools/tools.component';
import { DeleteComponent } from './tools/delete/delete.component';
import { ResizeToolComponent } from './tools/resize/lgos-resize-tool.component';
import { LgosColorPickerComponent } from './tools/color-picker/lgos-color-picker.component';
import { TextDirectionComponent } from './tools/text-direction/text-direction.component';
import { FontsManagerComponent } from './tools/fonts-manager/fonts-manager.component' ;
import { DrawService } from './services/draw-service.service';
import { FontsService } from './tools/fonts-manager/fonts.service';


@NgModule({
    declarations:[
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
    providers: [DrawService, FontsService],
    imports:[
        FormsModule,
        CommonModule,
        GoogleMaterialsModule
    ]
})

export class LgosDrawModule{}