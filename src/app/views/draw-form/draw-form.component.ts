import { ElementRef, ViewChild } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { UploadType } from './models/upload-type';
import { Shape } from './models/shape';
import { CanvasState } from './models/canvas-state';
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

  private canvasState: CanvasState;
  private graphicsImgElem: Shape;
  private overlayImgElem: Shape//HTMLImageElement;
  
  ngAfterViewInit(){
    this.canvasState = new CanvasState(this.canvas.nativeElement);
  }

  onFileSelect(file){
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedType.imgSrc = e.target.result;
       setTimeout(()=>{
        if(this.selectedType.value == 1)
          this.graphicsImgElem = new Shape(this.canvasState,this.graphicsImg.nativeElement);

        if(this.selectedType.value == 2)
          this.overlayImgElem = new Shape(this.canvasState, this.overlayImg.nativeElement);
       },10);
    }
    reader.readAsDataURL(file[0]);  
  }

  onUploadTypeSelection(ind){
    this.uploadTypes.forEach(function(elm){
        elm.isSelected = false;
    });
    this.selectedType = this.uploadTypes[ind];
  }
  

  render() {
    // requestAnimationFrame(()=>{
    //   this.render();
    // });
    //this.clear();
    this.graphicsImgElem.draw();
    this.overlayImgElem.draw();
}

  onMouseDown(event){
    this.canvasState.mouseDown(event);
  }
  onMouseMove(event){
    
  }
  onMouseUp(event){
    console.log(event);
  }


}
