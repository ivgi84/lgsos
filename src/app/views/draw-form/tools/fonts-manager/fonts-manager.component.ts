import { Component, OnInit, Input } from '@angular/core';
import { UserInput } from '../../models/user-input';

@Component({
  selector: 'lgos-fonts-manager',
  templateUrl: './fonts-manager.component.html',
  styleUrls: ['./fonts-manager.component.css']
})
export class FontsManagerComponent implements OnInit {

  constructor() { }

  @Input()elm:UserInput;
  private isEnabled;

  private fonts = {
    en:[
      {
        value:'arial',
        family:'arial',
        text:'Aabc'
      },
      {
        value:'sans-serif',
        family:'sans-serif',
        text:'Aabc'
      },
      {
        value:'Georgia',
        family:'Georgia',
        text:'Aabc'
      },
      {
        value:'FF Scala',
        family:'FF Scala',
        text:'Aabc'
      }
    ],
    he:[]
  }

  ngOnInit() {
    this.isEnabled = false;
  }
  
  toggle(){
    this.isEnabled = !this.isEnabled;
  }

}
