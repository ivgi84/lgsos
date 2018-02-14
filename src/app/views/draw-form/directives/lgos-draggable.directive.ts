import { Directive, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Element } from '../models/element';
import { UserInput } from '../models/user-input';
import * as _ from 'lodash';
import * as $ from 'jquery';
import 'jqueryui';
import '../../../../assets/libs/jquery.ui.rotatable.min'; 



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
        let $el:any = $('.playground #'+el.id);
          $el.draggable({
            cursor:"move",
            snap: ".playground"
          });
        $el.resizable({
          helper: "ui-resizable-helper",
          handles: "n,s,e,w",
          aspectRatio: el instanceof UserInput ? false : true,
          stop: function( event, ui ) {
            ui.element.parent().addClass('resize-stop');
            setTimeout(()=>{
              ui.element.parent().removeClass('resize-stop');
            },100);
            event.stopImmediatePropagation();
          }
        });
        $el.rotatable();
      });
    },100)
  }

  disableDrag(elm:Element){
    let $el = $('.playground #'+elm.id);
    let cE = $('.playground #'+elm.id+' p'); // ce: contentEditable
    $el.draggable({disabled:true});
    cE.attr('contenteditable','true');
  }
  enableDrag(elm:Element){
    let $el = $('.playground #'+elm.id);
    let cE = $('.playground #'+elm.id+' p'); // ce: contentEditable
    $el.draggable({disabled:false});
    cE.attr('contenteditable','false');
  }
}
