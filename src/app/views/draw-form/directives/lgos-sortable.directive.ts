import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[lgosSortable]'  
})
export class SortableDirective {

  @Input() thumbnails: any;
  @Output() updateOrder = new EventEmitter();

  private sortableEl:ElementRef
  private thumbnailsOrder = [];

  constructor(elm:ElementRef){
    this.sortableEl = elm.nativeElement;
  }
  
  onImageUpload(){
    $(this.sortableEl).sortable({
      beforeStop:this.onBeforeStop.bind(this)
    });

    this.thumbnailsOrder = this.order;
  }

  onBeforeStop(event, ui){
    setTimeout(()=>{
      this.thumbnailsOrder = this.order;
      this.updateOrder.emit(this.thumbnailsOrder);
    },100);
  }

  private get order(){
    let elOrder = [];
    $(this.sortableEl).children().each((ind, el)=>{
      let elInd = $(el).index();
      if(el.innerHTML != '')
        elOrder.push({id:el.id, z:100 - elInd});
    });
      
    return elOrder;
  }

}
