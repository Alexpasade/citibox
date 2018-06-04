import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { ClavesService } from '../claves.service';

@Component({
  selector: 'app-clave1',
  templateUrl: './clave1.component.html',
  styleUrls: ['./clave1.component.css']
})
export class Clave1Component implements OnInit {

  primerCodigo: string[];
  idOrder:string;
  status: string;
  codigo: string;

  constructor(private router: Router, private localStorageService: LocalStorageService, private clavesService: ClavesService) { }
  
  
  ngOnInit() {
    let espacio = "";
    let order:any = this.localStorageService.get('order')
    this.primerCodigo = order.codigoActual.split(espacio) 
    this.codigo = order.codigoActual
    this.idOrder = order.idOrden 
    this.status = order.estado  
  }

  cierraPedido(){
    if (this.status === "activo") {
      this.status = "cerrado" 
    }
    this.clavesService.setTransaccionOk(this.idOrder,this.codigo,this.status)
  }

}
