import {Element} from './element';

export class UserInput extends Element{
    constructor(public id:string, public z:number, isSelected, public width:number, public height:number, public text:string){
        super(id, 0, false, width, height);
    }
}
