import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims08RoutingModule } from './ims08-routing.module';
import { Ims08Component } from './ims08.component';


@NgModule({
  declarations: [Ims08Component],
  imports: [
    CommonModule,
    Ims08RoutingModule
  ]
})
export class Ims08Module { }
