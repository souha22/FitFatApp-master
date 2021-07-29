import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryTableRoutingModule } from './category-table-routing.module';
import { CategoryTableComponent } from './category-table.component';


@NgModule({
  declarations: [
    CategoryTableComponent
  ],
  imports: [
    CommonModule,
    CategoryTableRoutingModule
  ]
})
export class CategoryTableModule { }
