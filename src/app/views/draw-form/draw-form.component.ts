import { ElementRef, ViewChild,Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Upload } from './models/upload';
import { SortableDirective } from './directives/sortable.directive';
import { debug } from 'util';
import * as $ from 'jquery';
import * as _ from 'lodash';

import 'jqueryui';

@Component({
  selector: 'lgos-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent{

  constructor(private ref:ChangeDetectorRef){

  }

  @ViewChild(SortableDirective) thumbnails:SortableDirective;

  private uploadImgs = [];

  setDraggable(){
      $('.draggable-wrap').draggable({
        containment: "parent",
        scroll: false
      }).resizable({
          aspectRatio: true
        }
      );
  }
  
  onFileSelect(files:any){
    _.each(files, (file:any)=>{
      let fileName = file.name;
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let img = new Upload(fileName,'',false, e.target.result, 100 + this.uploadImgs.length);
        this.uploadImgs.unshift(img);
        setTimeout(()=>{
          this.setDraggable();
          this.thumbnails.onImageUpload();
        },500)
      }
      reader.readAsDataURL(file);  
    })
  }

  onOrderUpdate(list: Array<String>){
    _.each(this.uploadImgs,(img)=>{      
      let res = _.find(list,(val:any)=>{
        return val.id == img.id
      });
      img.level = res.level;
    });
    this.ref.detectChanges();
    debugger
  }

}
