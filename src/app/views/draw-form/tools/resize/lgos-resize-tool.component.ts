import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { UserInput } from '../../models/user-input';

@Component({
  selector: 'lgos-resize-tool',
  templateUrl: './lgos-resize-tool.component.html',
  styleUrls: ['./lgos-resize-tool.component.css']
})
export class ResizeToolComponent implements OnInit {

  @Input() elm:UserInput = null;
  @ViewChild('resizeToolWrapper') resizeToolWrapper:ElementRef;
  @HostListener('document:click',['$event'])
  onclick(e){
    if(this.isOpen){
      if(e && e.target){
          this.isOpen = this.resizeToolWrapper.nativeElement.contains(e.target);
      }
    }
  }

  styles = {};
  isOpen = false;
  
  ngOnInit() {
      this.styles = this.elm.styles;
  }  
  
  changeSize(size){
      this.elm.addStyle({'fontSize':size});
  }

  onInputChange(event: any) {
    this.changeSize(event.value);
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }
  close(){
    this.isOpen = false;
  }


}
