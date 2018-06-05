import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClavesService } from '../claves.service';

@Component({
  selector: 'app-clavemaestra',
  templateUrl: './clavemaestra.component.html',
  styleUrls: ['./clavemaestra.component.css']
})
export class ClavemaestraComponent implements OnInit {

  codigoMaestro: string[];
  idOrder:string;
  status: string;
  codigo: string;
  primerBloque: string[];
  segundoBloque: string[];

  constructor(private router: Router, private localStorageService: LocalStorageService, private clavesService: ClavesService) { }

  ngOnInit() {
    let espacio = "";
    let order:any = this.localStorageService.get('order')
    this.codigoMaestro = order.codigoMaestro.split(espacio)
    this.codigo = order.codigoMaestro
    this.idOrder = order.idOrden 
    this.status = order.estado 
    this.primerBloque = this.codigoMaestro.slice(0,4)
    this.segundoBloque = this.codigoMaestro.slice(4,8)  
  }
  cierraPedido(){
    if (this.status === "activo") {
      this.status = "cerrado" 
    }
    this.clavesService.setTransaccionOk(this.idOrder,this.codigo,this.status)

    this.router.navigate([`order/${this.idOrder}/ok`])
  }

  getIncidencia(){
    this.router.navigate([`order/${this.idOrder}/incidencia`])
    this.status = "incidencia"
    this.clavesService.setTransaccionOk(this.idOrder,this.codigo,this.status)
  }

}
