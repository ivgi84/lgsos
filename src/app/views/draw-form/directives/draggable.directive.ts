import { Directive, EventEmitter, HostListener, ElementRef } from '@angular/core';
import 'rxjs/Rx';

@Directive({
  selector: '[lgOsDraggableCanvas]'
})
export class DraggableDirective {
  debugger;

  private mouseup = new EventEmitter();
  private mousedown = new EventEmitter();
  private mousemove = new EventEmitter();
  private mouseout = new EventEmitter();
  private mousedrag;

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event) {
    debugger;
    this.mouseup.emit(event);
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
    debugger;
      this.mousedown.emit(event);
      return false; // Call preventDefault() on the event
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event) {
    debugger;
      this.mousemove.emit(event);
  }

  constructor(public element: ElementRef) {
    debugger;
    let map;
    let merge;
    this.mousedrag = this.mousedown.map(event => {
      event
      debugger;
        // return {
        //     top: event.clientY - this.element.nativeElement.getBoundingClientRect().top,
        //     left: event.clientX - this.element.nativeElement.getBoundingClientRect().left
        // };
    })
    .flatMap(
        imageOffset => this.mousemove.map(pos => ({
            // top: pos.clientY - imageOffset.top,
            // left: pos.clientX - imageOffset.left
        }))
        .takeUntil(this.mouseup)
    );
  }

}
