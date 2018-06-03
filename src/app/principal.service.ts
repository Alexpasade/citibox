
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: Http ) { }


  getAllDatos(paramId){

    return this.http.get(`http://ea59e04b.ngrok.io/api/nuevaorden/${paramId}`).toPromise()
  }
  
}
