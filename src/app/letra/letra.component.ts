import { Component, OnInit, ViewChild } from '@angular/core';
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
  focusLetra: boolean;
  crono: any;
  @ViewChild('letraInput') letraInput: any

  intervalPenalizacion: any;

  constructor(private router: Router, private localStorageService: LocalStorageService) {
    this.disable = false
    this.tiempoPenal = 30000
    this.numFallos = 0
    this.form = new FormGroup({
      letra: new FormControl('',[Validators.minLength(1), Validators.maxLength(1),Validators.required,Validators.pattern(/^[a-zA-Z]+$/)])
    })
    this.focusLetra = false
   }

    // Este metodo nos compara si tenemos penalización guardada en el localstorage para el temporizador en caso de salir de la aplicación.
  ngOnInit() {
    let order:any = this.localStorageService.get('order')
    this.letraBuzon = order.letra
    this.orderId = order.idOrden
    
    if(this.localStorageService.get('penalizacion')){
      this.lanzarTimeoutPenalizacion(this.localStorageService.get('penalizacion'))
      this.numFallos = 3
    }
  }
  //Estos metodos lanzan la penalización en casa meter la letra incorrecta 3 veces.

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
    let fechaActual = moment(new Date())
    this.crono = moment(this.tiempoPenal - fechaActual.diff(fechaPenalizacion))
    this.intervalPenalizacion = setInterval(()=> {
      let fechaActual = moment(new Date())
      this.crono = moment(this.tiempoPenal - fechaActual.diff(fechaPenalizacion))
      if(fechaActual.diff(fechaPenalizacion) > this.tiempoPenal){
        this.disable = false
        this.localStorageService.remove('penalizacion')
        this.numFallos = 0
        clearInterval(this.intervalPenalizacion)
      }
    }, 1000)
  }
  //Estos son los metodos para visualizar la letra correctamente.

  handleFocus(){
    this.focusLetra = true
  }

  handleBlur(){
    if(this.letraInput.nativeElement.value === ''){
      this.focusLetra = false
    }
  }

}
