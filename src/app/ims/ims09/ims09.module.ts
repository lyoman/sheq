import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims09RoutingModule } from './ims09-routing.module';
import { Ims09Component } from './ims09.component';


@NgModule({
  declarations: [Ims09Component],
  imports: [
    CommonModule,
    Ims09RoutingModule
  ]
})
export class Ims09Module { }
