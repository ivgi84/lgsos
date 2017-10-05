import { ElementRef, ViewChild,Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Upload } from './models/upload';
import { UserInput } from './models/user-input';
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
  constructor(private ref:ChangeDetectorRef){}

  @ViewChild(SortableDirective) thumbnails:SortableDirective;
  userFreeText: string = '';
  step = 0;
  setStep(index:number){
    this.step = index
  }

  nextStep(){
    this.step++;
  }
  prevStep(){
    this.step--;
  }

  
  private uploadImgs = [];
  private userInputs   = [];

  setDraggable(){
      $('.draggable-wrap').draggable({
        containment: "parent",
        cursor:"move",
        scroll: false
      }).resizable({
          aspectRatio: true,
          helper: "ui-resizable-helper",
          animate:true
        }
      );
  }
  
  onFileSelect(files:FileList){
    _.each(files, (file:File)=>{
      let fileName = file.name;
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let img  = new Upload(fileName,100 + this.uploadImgs.length, e.target.result,)
        this.uploadImgs.unshift(img);
        setTimeout(()=>{
          this.setDraggable();
          this.thumbnails.onImageUpload();
        },100)
      }
      reader.readAsDataURL(file);  
    })
  }

  onOrderUpdate(list: Array<String>){
    _.each(this.uploadImgs,(img:Upload)=>{      
      let res = _.find(list,(val:any)=>{
        return val.id == img.id
      });
      img.z = res.z;
    });
    this.ref.detectChanges();
  }

  addText(){
    var input = new UserInput('id' + this.userInputs.length,100+this.uploadImgs.length + this.userInputs.length+1,false,100,100,this.userFreeText);
    this.userInputs.push(input);
    this.setDraggable();
  }

}
