import { forEach } from '@angular/router/src/utils/collection';
import { UploadType } from './models/upload-type';
import { debug } from 'util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lgos-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent{
  
  private graphics = new UploadType(1, 'Graphics',true, '');
  private overlay = new UploadType(2, 'Overlay',false, '');
  private uploadTypes = [this.graphics, this.overlay];
  private selectedType = this.uploadTypes[0];

  onFileSelect(file){
    let reader = new FileReader();
    reader.onload = (e: any) => {
  
      this.selectedType.imgSrc = e.target.result;
    }
    reader.readAsDataURL(file[0]);  
    debugger;
  }

  onUploadTypeSelection(ind){
    this.uploadTypes.forEach(function(elm){
        elm.isSelected = false;
    });
    this.selectedType = this.uploadTypes[ind];
  }


}
