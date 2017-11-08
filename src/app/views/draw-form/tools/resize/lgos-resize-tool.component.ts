import { Component, OnInit, Input } from '@angular/core';
import { UserInput } from '../../models/user-input';

@Component({
  selector: 'lgos-resize-tool',
  templateUrl: './lgos-resize-tool.component.html',
  styleUrls: ['./lgos-resize-tool.component.css']
})
export class ResizeToolComponent implements OnInit {

  @Input() elm:UserInput = null;

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

  open(){
    this.isOpen = true;
  }
  close(){
    this.isOpen = false;
  }


}
