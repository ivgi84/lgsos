import { ElementRef, ViewChild,Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Element } from './models/element';
import { Upload } from './models/upload';
import { UserInput } from './models/user-input';
import { SortableDirective } from './directives/sortable.directive';
import { debug } from 'util';
import * as $ from 'jquery';
import * as _ from 'lodash';
import 'jqueryui';
//TODO: add image size on upload

@Component({
  selector: 'lgos-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent{
  constructor(private ref:ChangeDetectorRef){}

  private elementsList = [];
  private selectedElm: Element = null;

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


  selectElement(elm:Element, e){
    if(this.selectedElm)
      this.selectedElm.toggleSelection();

    this.selectedElm = elm;
    this.selectedElm.toggleSelection();
    this.enableDrag();
  }

  clearSelection(e){
    const regex = /playground/g;
    if(regex.test(e.target.classList.value) && this.selectedElm){
      this.selectedElm.deSelect();
      this.selectedElm = null;
    }
  }

  enableDrag(){
    $('.playground #' + this.selectedElm.id)
    .resizable({
        helper: "ui-resizable-helper"
      }).draggable({
      cursor:"move",
    });
  }
  disableDrag(){
    $('#'+this.selectedElm.id).draggable({disabled:true});
  }
  
  onFileSelect(files:FileList){
    _.each(files, (file:File)=>{
      let fileName = file.name.split('.')[0];
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let img  = new Upload(fileName,100 + this.elementsList.length, e.target.result);
        this.elementsList.unshift(img);
        this.elementsList = this.elementsList.slice();
        this.thumbnails.onImageUpload();
        this.setStep(1);
      }
      reader.readAsDataURL(file);  
    })
  }

  onOrderUpdate(list: Array<String>){
    _.each(this.elementsList,(img:Upload)=>{      
      let res = _.find(list,(val:any)=>{
        return val.id == img.id
      });
      img.z = res.z;
    });
    this.ref.detectChanges();
  }

  addText(){
    let input = new UserInput('id_' + this.elementsList.length,100+this.elementsList.length + this.elementsList.length+1,false,100,100,this.userFreeText);
    this.elementsList.push(input);
    this.elementsList = this.elementsList.slice();
    this.userFreeText = '';
  }



  onDelete(ind){
    this.elementsList.splice(ind, 1);
  }

}
