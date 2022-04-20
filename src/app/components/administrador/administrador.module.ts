import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdministradorComponent } from './administrador.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AdministradorComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule
  ]
})
export class AdministradorModule { }
