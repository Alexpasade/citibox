import { LetraService } from './../letra.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-letra',
  templateUrl: './letra.component.html',
  styleUrls: ['./letra.component.css']
})
export class LetraComponent implements OnInit {
  
  form: FormGroup
  letraBuzon: string;
  letraIncorrecta: boolean

  constructor(private router: Router, private localStorageService: LocalStorageService) {
    this.form = new FormGroup({
      letra: new FormControl('',[Validators.minLength(1), Validators.maxLength(1),Validators.required,Validators.pattern(/^[a-zA-Z]+$/)])
    })
    this.letraIncorrecta = false
   }

  ngOnInit() {
    let order:any = this.localStorageService.get('order')
    this.letraBuzon = order.letra
  }

  onSubmit(pLetra){
    console.log(pLetra)
    
    if (this.letraBuzon === pLetra.letra.toUpperCase()) {
      this.router.navigate(['clave1'])
    }else{
      this.letraIncorrecta = true
    }
  }

}
