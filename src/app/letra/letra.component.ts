import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import * as moment from 'moment';

@Component({
  selector: 'app-letra',
  templateUrl: './letra.component.html',
  styleUrls: ['./letra.component.css']
})
export class LetraComponent implements OnInit {
  
  form: FormGroup
  letraBuzon: string;
  letraIncorrecta: boolean
  orderId: string;
  numFallos: number;
  disable: boolean;
  tiempoPenal: number;

  intervalPenalizacion: any;

  constructor(private router: Router, private localStorageService: LocalStorageService) {
    this.disable = false
    this.tiempoPenal = 30000
    this.numFallos = 0
    this.form = new FormGroup({
      letra: new FormControl('',[Validators.minLength(1), Validators.maxLength(1),Validators.required,Validators.pattern(/^[a-zA-Z]+$/)])
    })
   }

  ngOnInit() {
    let order:any = this.localStorageService.get('order')
    this.letraBuzon = order.letra
    this.orderId = order.idOrden
    
    if(this.localStorageService.get('penalizacion')){
      this.lanzarTimeoutPenalizacion(this.localStorageService.get('penalizacion'))
      this.numFallos = 3
    }
  }

  onSubmit(pLetra){
    if (this.letraBuzon === pLetra.letra.toUpperCase()) {
      this.router.navigate([`order/${this.orderId}/clave1`])
    }else{
      this.numFallos++
      if (this.numFallos === 3) {
        let fecha_penalizacion = new Date()
        this.localStorageService.set('penalizacion', fecha_penalizacion)
        
        this.lanzarTimeoutPenalizacion(fecha_penalizacion)
      }
    }
  }

  lanzarTimeoutPenalizacion(fecha_penalizacion){
    let fechaPenalizacion = moment(fecha_penalizacion)
    this.disable = true

    this.intervalPenalizacion = setInterval(()=> {
      let fechaActual = moment(new Date())
      console.log(fechaActual.diff(fechaPenalizacion))
      if(fechaActual.diff(fechaPenalizacion) > this.tiempoPenal){
        this.disable = false
        this.localStorageService.remove('penalizacion')
        this.numFallos = 0
        clearInterval(this.intervalPenalizacion)
      }
    }, 1000)
  }

}
