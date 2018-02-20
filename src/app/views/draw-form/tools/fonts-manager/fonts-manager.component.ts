import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { UserInput } from '../../models/user-input';
import { FontsService } from './fonts.service';
import { Element } from '@angular/compiler';

declare global {
  interface Window { WebFont: any; }
}

@Component({
  selector: 'lgos-fonts-manager',
  templateUrl: './fonts-manager.component.html',
  styleUrls: ['./fonts-manager.component.scss']
})
export class FontsManagerComponent implements OnInit {

  constructor(private fontsService:FontsService) { }

  @Input()elm:UserInput;
  @ViewChild('fontsMngWrapper') fontsMngWrapper:ElementRef;

  @HostListener('document:click',['$event'])
  onclick(e){
    if(this.isEnabled && e && e.target){
        this.isEnabled = this.fontsMngWrapper.nativeElement.contains(e.target);
    }
  }
  private isEnabled;

  private fonts = {
    google: {
      families:['Droid Sans', 'Bungee','Risque','Pangolin']
    }
  }

  ngOnInit() {
    this.isEnabled = false;
    this.fontsService.getGoogleFonts().subscribe(res =>{
      debugger;
    });

    this.fontsService.wfSubject.subscribe(res =>{
      debugger;
    });
    this.checkWebFonts();
  }

  checkWebFonts(){
    setTimeout(()=>{
      let WebFont = window.WebFont;
      let webFontConfig = this.fonts;
      WebFont.load(webFontConfig)
    },1000)
  }
  
  toggle(){
    this.isEnabled = !this.isEnabled;
  }

  setFont(font){
    this.elm.addStyle({
      'fontFamily':font
    });
  }

}
