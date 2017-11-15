import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { Element } from '../../models/element';
import { debug } from 'util';

@Component({
  selector: 'lgos-color-picker',
  templateUrl: './lgos-color-picker.component.html',
  styleUrls: ['./lgos-color-picker.component.css']
})
export class LgosColorPickerComponent implements OnInit {

  @ViewChild('colorPalete') colorPalete: ElementRef;
  @Input() elm:Element;
  isEnabled = false;
  ctx: CanvasRenderingContext2D;
  private isFirstInit = true;

  constructor(){}

  presets = {
    colors:[]
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

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
    debugger;
    this.ctx = this.colorPalete.nativeElement.getContext('2d');
    let image = new Image();
    image.src='assets/img/colorwheel.png';
    image.onload = ()=>{
      this.ctx.drawImage(image,0,0, image.width, image.height);
    }
  }
  onMouseMove(e){
    debugger;
    let canvasOffset = this.colorPalete.nativeElement;
  }

  addColorToPreset(){

  }
  pickColor(){
    
  }

}
