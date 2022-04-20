import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisenadorRoutingModule } from './disenador-routing.module';
import { DisenadorComponent } from './disenador.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DisenadorComponent
  ],
  imports: [
    CommonModule,
    DisenadorRoutingModule,
    SharedModule
  ]
})
export class DisenadorModule { }
