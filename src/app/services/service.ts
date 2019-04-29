import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import {Email} from '../interfaces';

const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
    })
}

@Injectable({
  providedIn: 'root'
})

export class DataService {



  constructor(private http: HttpClient) { }


  url = `https://us-central1-relner.cloudfunctions.net/httpEmail`;

  sendEmailService(obj): Observable<Email> {
    return this.http.post<Email>(this.url, obj, httpOptions);
  }


}