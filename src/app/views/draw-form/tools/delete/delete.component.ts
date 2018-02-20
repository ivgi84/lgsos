import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Element } from '../../models/element';
import * as _ from 'lodash';

@Component({
  selector: 'lgos-delete-tool',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent{

  @Input() list:Array<Element>;
  @Output() delete:EventEmitter<number> = new EventEmitter<number>();

  action(){
    let elInd = _.findIndex(this.list, (el:Element)=>{
      return el.selection == true;
    });
    if(elInd > -1){
      this.delete.emit(elInd);
    }
  }

}
