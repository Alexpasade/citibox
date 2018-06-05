import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  
  problema: string
  
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {

    let error:any = this.localStorageService.get('error')
    console.log(error.error);
    
    if(error.error === "problema leyendo fichero"){
      this.problema = "lectura"
      console.log(this.problema);
      
    }else{
      this.problema = "anterior"
    }
    

  }

}
