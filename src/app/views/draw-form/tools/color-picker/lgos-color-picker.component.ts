import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { Element } from '../../models/element';
import { debug } from 'util';
import { UserInput } from 'app/views/draw-form/models/user-input';

@Component({
  selector: 'lgos-color-picker',
  templateUrl: './lgos-color-picker.component.html',
  styleUrls: ['./lgos-color-picker.component.css']
})
export class LgosColorPickerComponent {

  @ViewChild('colorPalete') colorPalete: ElementRef;
  @Input() elm:UserInput;

  isEnabled = false;
  ctx: CanvasRenderingContext2D;
  pixelColor = '';
  presetColors = [
      '#000',
      '#fff',
      '#ff5c5c',
      '#ffbd4a',
      '#fff952',
      '#99e265',
      '#35b729',
      '#44d9e6',
      '#2eb2ff',
      '#5271ff',
      '#b760e6',
      '#ff63b1'
  ]

  private isFirstInit = true;

  toggle(){
    this.isEnabled = !this.isEnabled;
    if(this.isEnabled){
      setTimeout(()=>{
        this.setCanvas();
      },10);
      this.isFirstInit = false;
    }
  }

  setCanvas(){
    this.ctx = this.colorPalete.nativeElement.getContext('2d');
    let image = new Image();
    image.src='assets/img/colorwheel.png';
    image.onload = ()=>{
      this.ctx.drawImage(image,0,0, image.width, image.height);
    }
  }
  getColor(e){
    let canvasElm = this.colorPalete.nativeElement;
    let imageData = this.ctx.getImageData(e.offsetX, e.offsetY,1,1);
    let pixel = imageData.data;
    this.pixelColor = 'rgb('+pixel[0]+','+pixel[1]+','+pixel[2]+')';
  }
  setColor(data){
    if(!data)
      this.elm.addStyle({'color':this.pixelColor});
    else{
      let colorObj = { color:data };
      this.elm.addStyle(colorObj);
    }
  }
  rgbFormat(value){
      debugger;

      let colorPattern = /^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
      
  }
}
