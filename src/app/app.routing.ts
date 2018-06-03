import { ErrorComponent } from './error/error.component';
import { LetraComponent } from './letra/letra.component';
import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';


export const appRoutes: Routes =[

{path: "nuevaorden/:id", component: PaginaprincipalComponent},
{path: "bienvenida", component: BienvenidaComponent},
{path: "error", component: ErrorComponent},
{path: "letra", component: LetraComponent},
{path: "**", component: PaginaprincipalComponent}
]
