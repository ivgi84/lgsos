import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputFileComponent } from './input-file/input-file.component';
import { GoogleMaterialsModule } from './google-materials.module';

let componentsList:Array<any> = [
    InputFileComponent
];

let modulesList:Array<any> = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMaterialsModule
]

@NgModule({
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        GoogleMaterialsModule
    ],
    declarations: componentsList,
    exports: componentsList.concat(modulesList)
})

export class LgosInfrastructModule {}