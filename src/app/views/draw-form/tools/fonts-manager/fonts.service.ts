import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'


@Injectable()
export class FontsService {

  constructor(private http:HttpClient) {
    this.webFontLoadInit();
   }
  public wfSubject = new Subject<Object>();

  getGoogleFonts():Observable<Response>{
      return this.http.get('http://localhost:4201/fonts/getAll').map((res:Response)=> res);
  }

  webFontLoadInit() {
    ((d)=>{
      let wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
      this.wfSubject.next({loaded:true});
    })(document);
  }

  uploadFont(file){
    debugger;
    const formData: FormData = new FormData();
    formData.append('font', file, file.name);
    let headers = new HttpHeaders();
    return this.http.post('http://localhost:4201/fonts/upload',file, {headers:headers}).subscribe(res=>{
      debugger;
    }, error =>{
      debugger;
    })
  }


}
