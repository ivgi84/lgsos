import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../../environments/environment';


@Injectable()
export class AuthService {
    private baseUrl

    constructor(private http: HttpClient) {
        this.baseUrl = environment.baseUrl;
    }

    register(user) {
        return this.http.post(`${this.baseUrl}api/auth/register/new`, {
            user: user
        }).toPromise().then(response =>{
            debugger;
        }).catch(error =>{
            debugger;
        })
    }


}
