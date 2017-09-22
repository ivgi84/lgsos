import { Directive, EventEmitter, HostListener, ElementRef, Output } from '@angular/core';
import 'rxjs/Rx';

@Directive({
  selector: '[lgOsDraggableCanvas]'
})
export class DraggableDirective {

  @Output() mouseDown:EventEmitter<Object> = new EventEmitter<Object>();
  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
    this.mouseDown.emit(event);
  }

  @Output() mouseUp:EventEmitter<Object> = new EventEmitter<Object>();
  @HostListener('mouseup', ['$event'])
  onMouseup(event) {
    this.mouseUp.emit({'event':event,'message':'Mouse Up event'});
  }

  @Output() mouseMove:EventEmitter<Object> = new EventEmitter<Object>();
  @HostListener('mousemove', ['$event'])
  onMousemove(event) {
    this.mouseMove.emit({'event':event,'message':'Mouse move event'});
  }

  constructor(public element: ElementRef) {
    let map;
    let merge;
    // this.mousedrag = this.mousedown.map(event => {
    //   event
    //   debugger;
    //     // return {
    //     //     top: event.clientY - this.element.nativeElement.getBoundingClientRect().top,
    //     //     left: event.clientX - this.element.nativeElement.getBoundingClientRect().left
    //     // };
    // })
    // .flatMap(
    //     imageOffset => this.mousemove.map(pos => ({
    //         // top: pos.clientY - imageOffset.top,
    //         // left: pos.clientX - imageOffset.left
    //     }))
    //     .takeUntil(this.mouseup)
    // );
  }

}
