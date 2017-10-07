import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Element } from '../../models/element';
import * as _ from 'lodash';

@Component({
  selector: 'lgos-delete-tool',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent{

  @Input() list:Array<Element>;
  //@Output() deleted = new EventEmitter();

  action(){
    debugger
    let elInd = _.findIndex(this.list, (el:Element)=>{
      return el.isSelected = true;
    });
    this.list.splice(elInd,1);
  }

}
