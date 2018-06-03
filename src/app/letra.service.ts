import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LetraService {

  constructor(private http: Http) {  }

getAllDatos(){

  return this.http.get('http://4e222eb8.ngrok.io/api/nuevaorden').toPromise()
}




}


