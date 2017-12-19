import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FontsService {

  constructor(private http:HttpClient) { }

  private gFontsApiKey = 'AIzaSyBmSQ5KA1fnYEIE65jrA3H4HJELjJzIb_M';
  private url = 'https://www.googleapis.com/webfonts/v1/webfonts?key='
  getGoogleFonts(){
      this.http.get(this.url + this.gFontsApiKey).subscribe(res =>{
        debugger;
      });
  }
}
