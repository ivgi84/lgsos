import { ElementRef, ViewChild, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Element } from './models/element';
import { Upload } from './models/upload';
import { UserInput } from './models/user-input';
import { SortableDirective } from './directives/lgos-sortable.directive';
import { LgosDraggableDirective } from './directives/lgos-draggable.directive';
import { DrawService } from './services/draw-service.service';
import { FontsService } from './tools/fonts-manager/fonts.service';
import { Observable } from 'rxjs/Observable';
import { debug } from 'util';
import * as $ from 'jquery';
import * as _ from 'lodash';
import 'jqueryui';
import * as html2canvas from 'html2canvas';
//TODO: add image size on upload

@Component({
  selector: 'lgos-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent {
  constructor(private ref: ChangeDetectorRef, private drawService:DrawService, private fontService:FontsService) {
      this.elementsList = [];
      this.selectedElm = null;
   }

  public elementsList = [];
  public selectedElm: Element;
  private prevSelection:Element = null;

  @ViewChild(SortableDirective) thumbnails: SortableDirective;
  @ViewChild(LgosDraggableDirective) dragElments: LgosDraggableDirective
  @ViewChild('playground') playGroundElm: ElementRef;

  userFreeText: string = '';
  step = 0;

  setStep(index: number) {
    this.step = index
  }

  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
  onFileSelect(files: FileList) {
    _.each(files, (file: File, ind:number) => {
      debugger;
      if(file.type.indexOf('image') > -1)
        this.uploadImage(file, ind);
      else
        this.uploadFont(file);
    });
  }

  private uploadFont(file){
    this.fontService.uploadFont(file);
  }
  
  private uploadImage(file, ind){
    let fileName = "Image_"+ind+1
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (elm) => {
          if(elm.target instanceof Image){
            let img = new Upload(fileName, 100 + this.elementsList.length, e.target.result,elm.target.naturalWidth);
            this.elementsList.unshift(img);
            this.elementsList = this.elementsList.slice();
            this.thumbnails.onImageUpload();
            this.setStep(1);
          }
        }
      }
      reader.readAsDataURL(file);
  }

  onOrderUpdate(list: Array<String>) {
    _.each(this.elementsList, (img: Upload) => {
      let res = _.find(list, (val: any) => {
        return val.id == img.id
      });
      img.z = res.z;
    });
    this.ref.detectChanges();
  }

  selectElement(elm: Element) { 
    elm.select();
    this.selectedElm = elm;

    if(this.prevSelection && this.prevSelection != this.selectedElm){
      this.prevSelection.deSelect()
    }
    
    
    this.prevSelection = this.selectedElm;
  }

  clearSelection(e) {
    const isPlayground = /playground/g;
    const isResizing = /resize-stop/g;
    if (isPlayground.test(e.target.classList.value) && !isResizing.test(e.target.classList.value) && this.selectedElm) {
      this.selectedElm.deSelect();
      this.selectedElm = null;
    }
  }

  disableDrag(elm:Element, e){
    if(this.selectedElm instanceof UserInput && (elm === this.selectedElm)){
      this.dragElments.disableDrag(this.selectedElm);
    }
  }

  onBlur(e){
    this.dragElments.enableDrag(this.selectedElm);
  }

  addText() {
    let input = new UserInput('id_' + this.elementsList.length, 100 + this.elementsList.length + this.elementsList.length + 1, false, 100, 100, this.userFreeText);
    this.elementsList.push(input);
    this.elementsList = this.elementsList.slice();
    this.userFreeText = '';
  }

  onDelete(ind) {
    this.elementsList.splice(ind, 1);
  }

  save(){
    html2canvas(this.playGroundElm.nativeElement).then(canvas=>{
      this.downloadImage(canvas,'image.png');
    })
  }
  private downloadImage(canvas, name){
    let a = document.createElement('a');
    a.href = canvas.toDataURL();
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

}
