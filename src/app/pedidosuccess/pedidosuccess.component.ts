import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pedidosuccess',
  templateUrl: './pedidosuccess.component.html',
  styleUrls: ['./pedidosuccess.component.css']
})
export class PedidosuccessComponent implements OnInit {
  
  idOrder: string;

  constructor(private router: Router,private localStorageService: LocalStorageService) { }

  ngOnInit() {
    let order:any = this.localStorageService.get('order')
    this.idOrder = order.idOrden 
  }


  handleClick(){
    this.router.navigate([`order/${this.idOrder}/final`])
  }
}
