import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { Element } from '../../models/element';
import { debug } from 'util';
import { UserInput } from 'app/views/draw-form/models/user-input';
import * as _ from 'lodash';

@Component({
  selector: 'lgos-color-picker',
  templateUrl: './lgos-color-picker.component.html',
  styleUrls: ['./lgos-color-picker.component.css']
})
export class LgosColorPickerComponent {

  @ViewChild('colorPalete') colorPalete: ElementRef;
  @ViewChild('colorBrightness') colorBrightness: ElementRef;
  @Input() elm:UserInput;

  isEnabled = false;
  colorPaleteCtx: CanvasRenderingContext2D;
  colorBrighnrssCtx: CanvasRenderingContext2D;

  pixelColor = '';
  pickedColor= '';
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
  ];

  private isFirstInit = true;

  toggle(){
    this.isEnabled = !this.isEnabled;
    if(this.isEnabled){
      setTimeout(()=>{//we need timeout, casue we have to wait
        this.colorPaleteCtx = this.colorPalete.nativeElement.getContext('2d');
        this.colorBrighnrssCtx = this.colorBrightness.nativeElement.getContext('2d');
        this.draw(-10,-10);
      },10);
      this.isFirstInit = false;
    }
  }

  getColor(e){
    let canvasElm = this.colorPalete.nativeElement;
    let pixel = this.colorPaleteCtx.getImageData(e.offsetX, e.offsetY,1,1).data;
    var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];

    let rgb = 'rgb('+pixel[0]+','+pixel[1]+','+pixel[2]+')';
    let hex = '#' + ('000000' + dColor.toString(16)).substr(-6);
    this.pixelColor = hex;
    let gradient = this.colorBrighnrssCtx.createLinearGradient(0,0,170,0);
    gradient.addColorStop(0,hex);
    gradient.addColorStop(1,'#000000');
    this.colorBrighnrssCtx.fillStyle = gradient;
    this.colorBrighnrssCtx.fillRect(20,20,300,20);

  }
  draw(x,y){
    let image = new Image();
    image.src='assets/img/colorwheel.png';
    image.onload = ()=>{
      this.colorPaleteCtx.drawImage(image,0,0, image.width, image.height);
      this.colorPaleteCtx.beginPath();
      this.colorPaleteCtx.arc(x,y,5,0,2*Math.PI);
      this.colorPaleteCtx.stroke();
      this.colorPaleteCtx.closePath();
    }
  }
  setColor(data, e){
    if(e){
      this.colorPaleteCtx.clearRect(0,0,300,300);
      this.draw(e.offsetX, e.offsetY);
    }
    this.pickedColor = data ? data : this.pixelColor;
    this.saveColor();
  }

  setColorBrightness(e){
    
  }

  private saveColor(){
      this.elm.addStyle({'color':this.pickedColor})
  }
}
