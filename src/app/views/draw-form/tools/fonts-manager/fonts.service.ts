import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Response } from '_debugger';


@Injectable()
export class FontsService {

  constructor(private http:HttpClient) { }


  getGoogleFonts():Observable<Response>{
      return this.http.get('http://localhost:4000/fonts/getAll').map((res:Response)=> res);
  }
}
