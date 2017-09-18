import { ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('graphicsImg') graphicsImg: ElementRef;
  @ViewChild('overlayImg') overlayImg: ElementRef;
    
  private graphics = new UploadType(1, 'Graphics',true, '');
  private overlay = new UploadType(2, 'Overlay',false, '');
  private uploadTypes = [this.graphics, this.overlay];
  private selectedType = this.uploadTypes[0];

  private ctx: CanvasRenderingContext2D;
  private graphicsImgElem: HTMLImageElement;
  private overlayImgElem: HTMLImageElement;
  
  ngAfterViewChecked(){
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  onFileSelect(file){
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedType.imgSrc = e.target.result;
       setTimeout(()=>{
         debugger
        if(this.selectedType.value == 1)
        this.graphicsImgElem = this.graphicsImg.nativeElement;

      if(this.selectedType.value == 2)
        this.overlayImgElem = this.overlayImg.nativeElement;
       },1000);
    }
    reader.readAsDataURL(file[0]);  
  }

  onUploadTypeSelection(ind){
    this.uploadTypes.forEach(function(elm){
        elm.isSelected = false;
    });
    this.selectedType = this.uploadTypes[ind];
  }
  
  clear() {
    this.ctx.clearRect(0, 0, 800, 800);
}

  render() {
    this.clear();
    this.ctx.drawImage(this.graphicsImgElem, 0, 0);
    this.ctx.drawImage(this.overlayImgElem, 0, 0);
}


}
