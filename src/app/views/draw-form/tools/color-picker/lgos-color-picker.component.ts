import { Component, OnInit, Input} from '@angular/core';
import { Element } from '../../models/element';

@Component({
  selector: 'lgos-color-picker',
  templateUrl: './lgos-color-picker.component.html',
  styleUrls: ['./lgos-color-picker.component.css']
})
export class LgosColorPickerComponent implements OnInit {

  constructor() { }

  @Input() elm:Element;

  presets = {
    colors:[]
  }

  ngOnInit() {
  }

  addColorToPreset(){

  }
  pickColor(){
    
  }

}
