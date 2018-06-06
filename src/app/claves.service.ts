import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClavesService {

  constructor(private http: Http) { }
  

  setTransaccionOk(idOrden, status, clave){
    let url = `http://friccion.ngrok.io/api/v1/order/${idOrden}`
    this.http.post(url, {param1: status, param2: clave})
    .subscribe( res =>{
      console.log(res.json()) 
    })
  }
}
