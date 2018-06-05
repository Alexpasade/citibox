import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClavesService } from '../claves.service';

@Component({
  selector: 'app-clave2',
  templateUrl: './clave2.component.html',
  styleUrls: ['./clave2.component.css']
})
export class Clave2Component implements OnInit {

  segundoCodigo: string[];
  idOrder:string;
  status: string;
  codigo: string;

  constructor(private router: Router,private localStorageService: LocalStorageService, private clavesService: ClavesService) { }

  ngOnInit() {
    let espacio = "";
    let order:any = this.localStorageService.get('order')
    this.segundoCodigo = order.codigoAnterior.split(espacio)
    this.codigo = order.codigoAnterior
    this.idOrder = order.idOrden 
    this.status = order.estado 
  }
  cierraPedido(){
    if (this.status === "activo") {
      this.status = "cerrado" 
    }
    this.clavesService.setTransaccionOk(this.idOrder,this.codigo,this.status)

    this.router.navigate([`order/${this.idOrder}/ok`])
  }
  handleClaveMaestra(){
    this.router.navigate([`order/${this.idOrder}/maestra`])
  }


}
