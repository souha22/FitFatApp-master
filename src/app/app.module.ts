import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrdersModule } from './orders/orders.module';
import { AppFrameworkModule } from './app-framework/app-framework.module';
import { HttpClientModule } from '@angular/common/http';

import { ShowAllRestaurantComponent } from './Restaurant/show-all-restaurant/show-all-restaurant.component';
import { AjouterRestaurantComponent } from './Restaurant/ajouter-restaurant/ajouter-restaurant.component';
import { ShowRestaurantComponent } from './Restaurant/show-restaurant/show-restaurant.component';
import { DeleteRestaurantComponent } from './Restaurant/delete-restaurant/delete-restaurant.component';
import { UpdateRestaurantComponent } from './Restaurant/update-restaurant/update-restaurant.component';
import {CommonModule} from "@angular/common";
import { AdminRestaurantListComponent } from './admin/admin-restaurant-list/admin-restaurant-list.component';
import { ResponsableRestaurantViewComponent } from './responsable restaurant/responsable-restaurant-view/responsable-restaurant-view.component';
import { GetRestaurantbyAdresseComponent } from './Restaurant/get-restaurantby-adresse/get-restaurantby-adresse.component';
import { GetRestaurantbyNomComponent } from './Restaurant/get-restaurantby-nom/get-restaurantby-nom.component';

import { BlogsComponent } from './blog/blogs/blogs.component';
import { DeleteBlogComponent } from './blog/delete-blog/delete-blog.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { AdminBlogComponent } from './blog/admin-blog/admin-blog.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowBlogComponent } from './blog/show-blog/show-blog.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { ProductTableComponent } from './admin/product-table/product-table.component';

import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { MatTableModule } from '@angular/material/table'
import { CKEditorModule} from 'ng2-ckeditor';
import { AddCommentComponent } from './blog/add-comment/add-comment.component';
import { DeleteCommentComponent } from './blog/delete-comment/delete-comment.component';
import { AdminCommentComponent } from './blog/admin-comment/admin-comment.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShoppingCartComponent } from './products/shopping-cart/shopping-cart.component';

import { ListUsersComponent } from './admin/list-users/list-users.component';
import { ProfileComponent } from './user/profile/profile.component';
import {UpdateuserComponent} from "./admin/updateuser/updateuser.component";
import {DeleteuserComponent} from "./user/deleteuser/deleteuser.component";
import {RegisterformComponent} from "./user/registerform/registerform.component";
import {ProductsComponent} from "./products/products.component";
import {AddProductComponent} from "./products/add-product/add-product.component";
import {ShowProductComponent} from "./products/show-product/show-product.component";
import {ShowAllProductsComponent} from "./products/show-all-products/show-all-products.component";
import {UpdateProductComponent} from "./products/update-product/update-product.component";
import {DeleteProductComponent} from "./products/delete-product/delete-product.component";
import {ShowAllProductsByCategoryComponent} from "./products/show-all-products-by-category/show-all-products-by-category.component";
import { AjouterPlatesComponent } from './plates/ajouter-plates/ajouter-plates.component';
import { DeletePlatesComponent } from './plates/delete-plates/delete-plates.component';
import { GetPlatesByNomComponent } from './plates/get-plates-by-nom/get-plates-by-nom.component';
import { GetPlatesByDesComponent } from './plates/get-plates-by-des/get-plates-by-des.component';
import { ShowAllPlatesComponent } from './plates/show-all-plates/show-all-plates.component';
import { ShowPlateComponent } from "./plates/show-plate/show-plate.component";
import { UpdatePlateComponent } from "./plates/update-plate/update-plate.component";
import { AdminPlatesListComponent } from "./admin/admin-plates-list/admin-plates-list.component";
import { ResponsableComponent } from './responsable/responsable.component';
import { ShowAllRecetteComponent } from './recette/show-all-recette/show-all-recette.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowAllRestaurantComponent,


    ProductTableComponent,


    BlogsComponent,
    DeleteBlogComponent,
    EditBlogComponent,
    AdminBlogComponent,
    AddBlogComponent,
    NotFoundComponent,
    ShowBlogComponent,

    AjouterRestaurantComponent,
    ShowRestaurantComponent,
    HomeComponent,

    DeleteRestaurantComponent,
    UpdateRestaurantComponent,
    AdminRestaurantListComponent,
    ResponsableRestaurantViewComponent,
    GetRestaurantbyAdresseComponent,
    GetRestaurantbyNomComponent,



    AddCommentComponent,
    DeleteCommentComponent,
    AdminCommentComponent,


    AjouterPlatesComponent,
    DeletePlatesComponent,
    GetPlatesByNomComponent,
    GetPlatesByDesComponent,
    ShowAllPlatesComponent,
    ShowPlateComponent,
    UpdatePlateComponent,
    AdminPlatesListComponent,
    ResponsableComponent,
  ShoppingCartComponent,
  ShowAllRecetteComponent
    ],



  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrdersModule,
    ReactiveFormsModule,
    AppFrameworkModule,
    NgbModule,
    MatSliderModule,
    SidebarModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    Ng2SearchPipeModule,
    CKEditorModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})


export class AppModule { }

