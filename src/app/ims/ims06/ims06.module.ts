import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims06RoutingModule } from './ims06-routing.module';
import { Ims06Component } from './ims06.component';


@NgModule({
  declarations: [Ims06Component],
  imports: [
    CommonModule,
    Ims06RoutingModule
  ]
})
export class Ims06Module { }
