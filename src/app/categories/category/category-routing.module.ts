import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { ShowCategoryComponent } from '../show-category/show-category.component';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },

  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'showAllCategories', component: ShowCategoryComponent },
  { path: 'delete-category/:id', component: DeleteCategoryComponent},
  { path: 'update-category/:id', component: UpdateCategoryComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
