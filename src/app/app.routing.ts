import { PedidosuccessComponent } from './pedidosuccess/pedidosuccess.component';
import { Clave1Component } from './clave1/clave1.component';
import { ErrorComponent } from './error/error.component';
import { LetraComponent } from './letra/letra.component';
import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';


export const appRoutes: Routes =[

{path: "order/:id", component: PaginaprincipalComponent},
{path: "order/:id/bienvenida", component: BienvenidaComponent},
{path: "order/:id/error", component: ErrorComponent},
{path: "order/:id/letra", component: LetraComponent},
{path: "order/:id/clave1", component: Clave1Component},
{path: 'order/:id/ok', component: PedidosuccessComponent},
{path: "**", component: PaginaprincipalComponent}
]
