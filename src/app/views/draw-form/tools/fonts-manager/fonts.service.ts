import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';


@Injectable()
export class FontsService {

  constructor(private http:HttpClient) {
    this.webFontLoadInit();
   }
  public wfSubject = new Subject<Object>();

  private fontsRequestData = null;

  getLocalFonts(){
      return this.http.get('http://localhost:4201/fonts/getLocal').map((res:any)=> {
        debugger
        this.fontsRequestData = res;
        return res;
      });
  }

  getGoogleFonts(){
    if(!this.fontsRequestData){
      return this.http.get('http://localhost:4201/fonts/getAll').map((res:any)=> {
        debugger
        this.fontsRequestData = res.items;
        return res.items;
      });
    }    
      return Observable.of(this.fontsRequestData); // short way to return observalbe with existing data
  }

  webFontLoadInit():void {
    ((d)=>{
      let wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
      this.wfSubject.next({loaded:true});
    })(document);
  }

  uploadFont(file){
    const formData: FormData = new FormData();
    formData.append('font', file, file.name);
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post('http://localhost:4201/fonts/upload',formData, {headers:headers}).subscribe(res=>{
      debugger;
    }, error =>{
      debugger;
    })
  }


}
