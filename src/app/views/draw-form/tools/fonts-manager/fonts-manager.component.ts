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

  private fonts = {
    en:[],
    he:[]
  }

  ngOnInit() {
  }
  

}
