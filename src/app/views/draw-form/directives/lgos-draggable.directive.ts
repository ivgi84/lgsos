import { Directive, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Element } from '../models/element';
import * as _ from 'lodash';
import * as $ from 'jquery';
import 'jqueryui';

@Directive({
  selector: '[lgosDraggable]'
})
export class LgosDraggableDirective implements OnChanges {

  constructor() { }

  @Input() elements: Element;

  ngOnChanges(changes){
    //this.setAllDraggable();
  }

  setAllDraggable(){
    setTimeout(()=>{
      this.elements;
      _.each(this.elements, (el:Element)=>{
        let $el = $('.playground #'+el.id);
        // $el.draggable({
        //   cursor:"move"
        // })
        $el.resizable({
          helper: "ui-resizable-helper"
        })
      });
    },100)
  }

  disableDrag(elm:Element){
    $('.playground #'+elm.id).draggable({disabled:true});
  }
  enableDrag(elm){
    debugger;
    $('.playground  #'+elm.id).draggable();
  }

}
