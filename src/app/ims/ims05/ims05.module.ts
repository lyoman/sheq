import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims05RoutingModule } from './ims05-routing.module';
import { Ims05Component } from './ims05.component';
import { DepartmentComponent } from './department/department.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [Ims05Component, DepartmentComponent, CategoryComponent],
  imports: [
    CommonModule,
    Ims05RoutingModule
  ]
})
export class Ims05Module { }
