import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import {ShowAllRestaurantComponent} from "./Restaurant/show-all-restaurant/show-all-restaurant.component";
import {BlogsComponent} from "./blog/blogs/blogs.component";
import {AddBlogComponent} from "./blog/add-blog/add-blog.component";
import {ShowBlogComponent} from "./blog/show-blog/show-blog.component";
import {AdminBlogComponent} from "./blog/admin-blog/admin-blog.component";
import {EditBlogComponent} from "./blog/edit-blog/edit-blog.component";
import {DeleteBlogComponent} from "./blog/delete-blog/delete-blog.component";
// import {NotFoundComponent} from "./not-found/not-found.component";
import {AjouterRestaurantComponent} from "./Restaurant/ajouter-restaurant/ajouter-restaurant.component";
import {ShowRestaurantComponent} from "./Restaurant/show-restaurant/show-restaurant.component";
import {DeleteRestaurantComponent} from "./Restaurant/delete-restaurant/delete-restaurant.component";
import {UpdateRestaurantComponent} from "./Restaurant/update-restaurant/update-restaurant.component";
import {AdminRestaurantListComponent} from "./admin/admin-restaurant-list/admin-restaurant-list.component";
import {ResponsableRestaurantViewComponent} from "./responsable restaurant/responsable-restaurant-view/responsable-restaurant-view.component";
import {GetRestaurantbyAdresseComponent} from "./Restaurant/get-restaurantby-adresse/get-restaurantby-adresse.component";
import {GetRestaurantbyNomComponent} from "./Restaurant/get-restaurantby-nom/get-restaurantby-nom.component";

import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';

import {ShowProductComponent} from './products/show-product/show-product.component';
import {ShowAllProductsComponent} from './products/show-all-products/show-all-products.component'
// import { ShowAllProductsByCategoryComponent } from './products/show-all-products-by-category/show-all-products-by-category.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';

import {ListUsersComponent} from "./admin/list-users/list-users.component";
import {DeleteuserComponent} from "./user/deleteuser/deleteuser.component";
import {InscriptionComponent} from "./user/inscription/inscription.component";
import {UpdateuserComponent} from "./admin/updateuser/updateuser.component";
import {DeleteCommentComponent} from "./blog/delete-comment/delete-comment.component";
import {AdminCommentComponent} from "./blog/admin-comment/admin-comment.component";

import { ShoppingCartComponent } from './products/shopping-cart/shopping-cart.component';

import {LoginformComponent} from "./user/loginform/loginform.component";
import {RegisterformComponent} from "./user/registerform/registerform.component";
import {ProfileComponent} from "./user/profile/profile.component";

import {AjouterPlatesComponent} from "./plates/ajouter-plates/ajouter-plates.component";
import {DeletePlatesComponent} from "./plates/delete-plates/delete-plates.component";
import {GetPlatesByDesComponent} from "./plates/get-plates-by-des/get-plates-by-des.component";
import {GetPlatesByNomComponent} from "./plates/get-plates-by-nom/get-plates-by-nom.component";
import {ShowAllPlatesComponent} from "./plates/show-all-plates/show-all-plates.component";
import {ShowPlateComponent} from "./plates/show-plate/show-plate.component";
import {UpdatePlateComponent} from "./plates/update-plate/update-plate.component";
import {AdminPlatesListComponent} from "./admin/admin-plates-list/admin-plates-list.component";
import {ResponsableComponent} from "./responsable/responsable.component";
import {ShowAllRecetteComponent} from "./recette/show-all-recette/show-all-recette.component";
import {AdminRecetteListeComponent} from "./admin/admin-recette-liste/admin-recette-liste.component";

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'blogs', component: BlogsComponent  },
  { path: 'add-blog', component: AddBlogComponent  },
  { path: 'show-blog/:id', component: ShowBlogComponent },
  { path: 'admin-blog', component: AdminBlogComponent },
  { path: 'edit-blog/:id', component: EditBlogComponent  },
  { path: 'delete-blog/:id', component: DeleteBlogComponent  },
 // { path: '**', component: NotFoundComponent },
  { path: 'delete-blog/:id', component: DeleteBlogComponent  },
  { path: 'admin-comment', component: AdminCommentComponent },
  { path: 'delete-comment/:id', component: DeleteCommentComponent },


  { path: 'addProduct', component: AddProductComponent },
  { path: 'showProduct/:id', component: ShowProductComponent },
  { path: 'showAllProducts', component: ShowAllProductsComponent },

  // { path: 'category/:Category', component: ShowAllProductsByCategoryComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent},
  { path: 'listusers', component: ListUsersComponent  },
  //{ path: 'inscription', component: InscriptionComponent  },
  { path: 'deleteuser/:id', component: DeleteuserComponent  },
  { path: 'inscription', component: InscriptionComponent  },
  { path: 'updateuser/:id', component: UpdateuserComponent  },
  { path: 'profile/:id', component:  ProfileComponent },
  // { path: '**', component: NotFoundComponent },

  //login and register
  {path: 'login', component: LoginformComponent},
  {path: 'register', component: RegisterformComponent},

  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrdersComponent},

  { path: 'showAllRestaurant', component: ShowAllRestaurantComponent },
  { path: 'AjouterRestaurantComponent', component: AjouterRestaurantComponent },
  { path: 'DeleteRestaurantComponent/:id', component: DeleteRestaurantComponent },
  { path: 'ShowRestaurantComponent/:id', component: ShowRestaurantComponent },
  { path: 'UpdateRestaurantComponent/:id', component: UpdateRestaurantComponent },
  { path: 'AdminRestaurantList', component: AdminRestaurantListComponent},
  { path: 'ResponsableRestaurant/:id', component: ResponsableRestaurantViewComponent },
  { path: 'GetRestaurantbyAdresse/:adresse', component: GetRestaurantbyAdresseComponent },
  { path: 'showAllRecettes', component: ShowAllRecetteComponent},
  { path: 'AdminRecetteList', component: AdminRecetteListeComponent},

  { path: 'AjouterPlates', component: AjouterPlatesComponent },
  { path: 'DeletePlates/:id', component: DeletePlatesComponent },
  { path: 'GetPlatesByDes/:description', component: GetPlatesByDesComponent },
  { path: 'GetPlatesByNom/:nom', component: GetPlatesByNomComponent },
  { path: 'showAllPlates', component: ShowAllPlatesComponent },
  { path: 'ShowPlate/:id', component: ShowPlateComponent },
  { path: 'UpdatePlate/:id', component: UpdatePlateComponent },
  { path: 'AdminPlatesList', component: AdminPlatesListComponent},
  { path: 'responsable', component: ResponsableComponent},

  { path: 'cart', component: ShoppingCartComponent },
  // { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then(r => r.RestaurantModule) }

  { path: 'category', loadChildren: () => import('./categories/category/category.module').then(m => m.CategoryModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'categoryTable', loadChildren: () => import('./admin/category-table/category-table.module').then(m => m.CategoryTableModule) },

  { path: 'user', loadChildren: () => import('./user/user.module').then(u => u.UserModule) }




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
