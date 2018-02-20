import { parse } from 'querystring';
import { UserInput } from '../../models/user-input';
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'lgos-text-direction',
  templateUrl: './text-direction.component.html',
  styleUrls: ['./text-direction.component.scss']
})
export class TextDirectionComponent{
  @Input() elm:UserInput;
  @ViewChild('textDirection') textDirection: ElementRef;
  @HostListener('document:click',['$event'])
  onclick(e){
      if(this.isEnabled){
        if(e && e.target){
          this.isEnabled = this.textDirection.nativeElement.contains(e.target);
        }
      }
  }

  public isEnabled = false;
  public fontWeightEnabled = false;

  toggle(){
    this.isEnabled = !this.isEnabled;
  }
  formatText(prop, val){
    this.elm.addStyle({[prop]:val});
  }
  toggleFontWeight(){
    this.fontWeightEnabled = !this.fontWeightEnabled;
  }
  onFontSizeChange(e){
      this.elm.addStyle({'fontWeight':e.value});
  }


}
