import { Component, OnInit, Input } from '@angular/core';
import { UserInput } from '../../models/user-input';
import { FontsService } from './fonts.service';

@Component({
  selector: 'lgos-fonts-manager',
  templateUrl: './fonts-manager.component.html',
  styleUrls: ['./fonts-manager.component.css']
})
export class FontsManagerComponent implements OnInit {

  constructor(private fontsService:FontsService) { }

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
    this.fontsService.getGoogleFonts().subscribe(res =>{
        debugger
    });
  }

  addFont(){
    // var bitterFontFace = new FontFace('Bitter', 'url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)');
    // document.fonts.add(bitterFontFace);
  }
  
  toggle(){
    this.isEnabled = !this.isEnabled;
  }

}
