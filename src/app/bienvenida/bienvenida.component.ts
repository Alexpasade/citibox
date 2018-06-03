import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  numBuzon: string;

  constructor(private router: Router, private localStorageService: LocalStorageService)  { }

  ngOnInit() {
    let order:any = this.localStorageService.get('order')
    this.numBuzon = order.buzon
  }
  
  handleLetra(){
    this.router.navigate(['letra'])

  }

}
