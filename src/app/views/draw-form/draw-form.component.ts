import { debug } from 'util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lgos-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnInit {

  private uploadTypes: Object[] = [{
    value:1,
    text:'Graphics',
    isSelected: true,
    imgSrc:''
  },{
    value:2,
    text:'Overlay',
    isSelected:false,
    imgSrc:''
  }];

  private selectedType = this.uploadTypes[0];

  private graphics:Object = {};
  private overlay:Object = {};

  onFileSelect(file){
  
    this.uploadTypes;
    let reader = new FileReader();
    reader.onload = (e: any) => {
      debugger
      this.selectedType.imgSrc = e.target.result;
    }
    reader.readAsDataURL(file[0]);  
  }

  onUploadTypeSelection(ind){
    debugger;
  }

  ngOnInit() {
  }

}
