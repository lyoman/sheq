import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims10RoutingModule } from './ims10-routing.module';
import { Ims10Component } from './ims10.component';


@NgModule({
  declarations: [Ims10Component],
  imports: [
    CommonModule,
    Ims10RoutingModule
  ]
})
export class Ims10Module { }
