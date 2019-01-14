import { NgModule } from '@angular/core';
import { LgosInfrastructModule } from '../../infrastract/infrastruct.module';

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
        LgosInfrastructModule
    ]
})

export class LgosDrawModule{}