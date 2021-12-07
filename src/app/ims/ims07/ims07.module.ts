import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims07RoutingModule } from './ims07-routing.module';
import { Ims07Component } from './ims07.component';


@NgModule({
  declarations: [Ims07Component],
  imports: [
    CommonModule,
    Ims07RoutingModule
  ]
})
export class Ims07Module { }
