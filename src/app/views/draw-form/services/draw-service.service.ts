import { Injectable,  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DrawService {

  constructor(private http:HttpClient) { }

  getImage(){
    return this.http.get('/api/test');
  }

}
