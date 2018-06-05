import { PrincipalService } from './../principal.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent implements OnInit {

  arrayDatos:any;
  orderId: string;

  constructor(private principalservicio: PrincipalService, private localStorageService: LocalStorageService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe( (params) =>{
      this.principalservicio.getOrder(params.id).then((res)=>{
        this.arrayDatos = res.json()
        if (this.arrayDatos.error) {
          this.router.navigate([`order/${params.id}/error`])
          this.localStorageService.set('error',this.arrayDatos)
        }else{
          this.router.navigate([`order/${params.id}/bienvenida`])
          this.localStorageService.set('order',this.arrayDatos)
        }
      })
    })  
  }
}
