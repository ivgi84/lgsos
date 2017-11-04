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
    this.enableModifications();
  }

  setListener(){
    $('.playground .draggable-wrap').on('reize', function(e){
        e.stopImmediatePropagation();
    });
  }

  enableModifications(){
    setTimeout(()=>{
      this.elements;
      _.each(this.elements, (el:any)=>{
        let $el = $('.playground #'+el.id);
          $el.draggable({
            cursor:"move",
            snap: ".playground"
          });
        $el.resizable({
          helper: "ui-resizable-helper",
          handles: "n, e, s, w",
          stop: function( event, ui ) {
            ui.element.parent().addClass('resize-stop');
            setTimeout(()=>{
              ui.element.parent().removeClass('resize-stop');
            },100);
            event.stopImmediatePropagation();
          }
        })
      });
    },100)
  }

  resizeStop(e){
    debugger;

  }

  disableDrag(elm:Element){
    let $el = $('.playground #'+elm.id);
    $el.draggable({disabled:true});
    $el.attr('contenteditable','true');
  }
  enableDrag(elm:Element){
    let $el = $('.playground #'+elm.id);
    $el.draggable({disabled:false});
    $el.attr('contenteditable','false');
  }
}
