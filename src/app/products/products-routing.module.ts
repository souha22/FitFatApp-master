import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {AddProductComponent} from './add-product/add-product.component';
import {ShowProductComponent} from './show-product/show-product.component';
import {ShowAllProductsComponent} from './show-all-products/show-all-products.component'
import { ShowAllProductsByCategoryComponent } from './show-all-products-by-category/show-all-products-by-category.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: ShowAllProductsComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'showProduct/:id', component: ShowProductComponent },
  { path: 'showAllProducts', component: ShowAllProductsComponent },
  { path: 'productCategory/:nom', component: ShowAllProductsByCategoryComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent},

  { path: 'Cart', component: ShoppingCartComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
