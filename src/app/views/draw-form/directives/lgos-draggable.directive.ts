import { Directive, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
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

  private _plagroundClass = '';
  private _draggableClass = '';

  @Input() elements: Element;

  @Input() 
    set playgroundClass(name: string){
      this._plagroundClass = '.' + name;
    }
    get playgroundClass():string{
      return this._plagroundClass;
    }

  @Input()
    set draggableClass(name: string){
      this._draggableClass = '.' + name;
    }
    get draggableClass():string{
      return this.playgroundClass + ' ' + this._draggableClass;
    }

  ngOnChanges(changes){
    this.enableModifications();
  }

  setListener(){
    $(this.draggableClass).on('resize', function(e){
        e.stopImmediatePropagation();
    });
  }

  enableModifications(){
    setTimeout(()=>{
      this.elements;
      _.each(this.elements, (el:any)=>{
        let $el:any = $(this.playgroundClass + ' #'+el.id);
          $el.draggable({
            cursor:"move",
            snap: this.playgroundClass
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
        $el.rotatable({
          wheelRotate: false
        });
      });
    },100)
  }

  disableDrag(elm:Element){
    let $el = $(this.playgroundClass + ' #'+elm.id);
    let cE = $(this.playgroundClass + ' #'+elm.id+' p'); // ce: contentEditable
    $el.draggable({disabled:true});
    cE.attr('contenteditable','true');
  }
  enableDrag(elm:Element){
    let $el = $(this.playgroundClass + ' #'+elm.id);
    let cE = $(this.playgroundClass + ' #'+elm.id+' p'); // ce: contentEditable
    $el.draggable({disabled:false});
    cE.attr('contenteditable','false');
  }
}
