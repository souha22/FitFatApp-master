import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { ShowCategoryComponent } from '../show-category/show-category.component';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { UpdateCategoryComponent } from '../update-category/update-category.component';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryComponent,
    AddCategoryComponent,
    ShowCategoryComponent,
    DeleteCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class CategoryModule { }
