import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { AdminComponent } from './admin.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { ProductTableComponent } from './product-table/product-table.component';
import {AdminBlogComponent} from "../blog/admin-blog/admin-blog.component";
import {EditBlogComponent} from "../blog/edit-blog/edit-blog.component";
import {DeleteBlogComponent} from "../blog/delete-blog/delete-blog.component";
import {AddBlogComponent} from "../blog/add-blog/add-blog.component";
import {ShowBlogComponent} from "../blog/show-blog/show-blog.component";
import {BlogsComponent} from "../blog/blogs/blogs.component";
import {AdminCommentComponent} from "../blog/admin-comment/admin-comment.component";
import { ListUsersComponent } from './list-users/list-users.component';
import {UpdateuserComponent} from "./updateuser/updateuser.component";
import {ShowAllRecetteComponent} from "../recette/show-all-recette/show-all-recette.component";

const routes: Routes = [
  { path: '', component: AdminComponent },

  { path: 'ProductTable', component: ProductTableComponent },
  { path: 'CategoryTable', component: CategoryTableComponent },
  { path: 'admin-blog', component: AdminBlogComponent },
  { path: 'admin-comment', component: AdminCommentComponent },
  { path: 'edit-blog/:id', component: EditBlogComponent  },
  { path: 'delete-blog/:id', component: DeleteBlogComponent  },
  { path: 'add-blog', component: AddBlogComponent  },
  { path: 'show-blog/:id', component: ShowBlogComponent },
  { path: 'blogs', component: BlogsComponent  },


  { path: 'listusers', component: ListUsersComponent},
  { path: 'updateuser', component: UpdateuserComponent},


  { path: 'AdminRecetteList', component: ShowAllRecetteComponent},


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
