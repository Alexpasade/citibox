import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { LetraComponent } from './letra/letra.component';
import { Clave1Component } from './clave1/clave1.component';
import { Clave2Component } from './clave2/clave2.component';
import { ClavemaestraComponent } from './clavemaestra/clavemaestra.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { FinalComponent } from './final/final.component';
import { HttpModule } from '@angular/http';
import { appRoutes} from './app.routing';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ErrorComponent } from './error/error.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PedidosuccessComponent } from './pedidosuccess/pedidosuccess.component';





@NgModule({
  declarations: [
    AppComponent,
    PaginaprincipalComponent,
    LetraComponent,
    Clave1Component,
    Clave2Component,
    ClavemaestraComponent,
    IncidenciaComponent,
    FinalComponent,
    ErrorComponent,
    BienvenidaComponent,
    PedidosuccessComponent, 

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
     RouterModule.forRoot(appRoutes),
      HttpModule, LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
