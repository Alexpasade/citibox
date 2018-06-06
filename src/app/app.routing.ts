import { FinalComponent } from './final/final.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { ClavemaestraComponent } from './clavemaestra/clavemaestra.component';
import { Clave2Component } from './clave2/clave2.component';
import { PedidosuccessComponent } from './pedidosuccess/pedidosuccess.component';
import { Clave1Component } from './clave1/clave1.component';
import { ErrorComponent } from './error/error.component';
import { LetraComponent } from './letra/letra.component';
import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

//Todas las rutas a los componentes que vamos dependiendo de la url.
export const appRoutes: Routes =[

{path: "order/:id", component: PaginaprincipalComponent},
{path: "order/:id/bienvenida", component: BienvenidaComponent},
{path: "order/:id/error", component: ErrorComponent},
{path: "order/:id/letra", component: LetraComponent},
{path: "order/:id/clave1", component: Clave1Component},
{path: "order/:id/clave2", component: Clave2Component},
{path: "order/:id/maestra", component: ClavemaestraComponent},
{path: "order/:id/incidencia", component: IncidenciaComponent},
{path: 'order/:id/ok', component: PedidosuccessComponent},
{path: 'order/:id/final',component: FinalComponent},
{path: "**", component: PaginaprincipalComponent}
]
