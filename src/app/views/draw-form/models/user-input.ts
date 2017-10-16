import { Element } from './element';
import * as _ from 'lodash';

export class UserInput extends Element{
    styles = {};
    constructor(public id:string, public z:number, isSelected, public width:number, public height:number, public text:string){
        super(id, 0, false, width, height);
    }
    get type(){
        return 'userInput';
    }
  
    addStyle(style){
        _.extend(this.styles, style);
    }
    removeStyle(style){
            
    }
}
