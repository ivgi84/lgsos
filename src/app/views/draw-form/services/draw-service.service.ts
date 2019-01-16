import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DrawService {
  private baseUrl;
  constructor(private http:HttpClient) {
    this.baseUrl = environment.baseUrl;
   }

  getImage(canvasData){
    return this.http.post(`${this.baseUrl}api/createImage`,{
      canvas: canvasData
    });
  }

}
