import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-clave1',
  templateUrl: './clave1.component.html',
  styleUrls: ['./clave1.component.css']
})
export class Clave1Component implements OnInit {

  primerCodigo: string[];

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    let espacio = "";
    let order:any = this.localStorageService.get('order')
    this.primerCodigo = order.codigoActual.split(espacio)
      
  }

}
