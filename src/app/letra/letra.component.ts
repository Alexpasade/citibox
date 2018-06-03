import { LetraService } from './../letra.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-letra',
  templateUrl: './letra.component.html',
  styleUrls: ['./letra.component.css']
})
export class LetraComponent implements OnInit {
  
  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      letra: new FormControl('',[Validators.minLength(1), Validators.maxLength(1),Validators.required,Validators.pattern(/^[a-zA-Z]+$/)])
    })
   }

  ngOnInit() {
  }

}
