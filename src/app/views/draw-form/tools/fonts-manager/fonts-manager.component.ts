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
  private isEnabled = false;
  private fonts;


  // private fonts = {
  //   en:[],
  //   he:[]
  // }

  ngOnInit() {
  
  }

  addFont(){
    // var bitterFontFace = new FontFace('Bitter', 'url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)');
    // document.fonts.add(bitterFontFace);
  }
  

}
