import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ProductsService } from '../products.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public productService: ProductsService,
              public router:Router) { }

  ngOnInit(): void {
    this.productService.shoppingCart = new Map(JSON.parse(sessionStorage.getItem("shoppingCart")));
    this.productService.shoppingCartTotalPrice = sessionStorage.getItem("shoppingCartTotalPrice");
    // this.currentUser = JSON.parse(sessionStorage.getItem("userDetails")) as User;
    // console.log(this.currentUser);
  }

  // checkoutCommand(){
  //   let newCommand = new Command();
  //   newCommand.Status = "New";
  //   newCommand.creationDate = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US')
  //   newCommand.user = "/api/users/"+this.currentUser.id;

  //   this.productService.shoppingCart.forEach((value: boolean, key: string) => {
  //     newCommand.products.push("/api/products/"+key)
  //   });
  //   console.log(newCommand)
  //   this.productService.shoppingCart = new Map();
  //   this.productService.shoppingCartTotalPrice = 0;
  //   sessionStorage.setItem('shoppingCart', JSON.stringify([...this.productService.shoppingCart]));
  //   sessionStorage.setItem('shoppingCartTotalPrice', this.productService.shoppingCartTotalPrice);
  //   this.commandService.addCommand(newCommand).subscribe(
  //     ()=>{
  //       this.router.navigate(["showCommands"])
  //     }
  //   );
  // }

  deleteProductFromCart(productID){
    this.productService.shoppingCart = new Map(JSON.parse(sessionStorage.getItem("shoppingCart")));
    this.productService.shoppingCartTotalPrice = sessionStorage.getItem("shoppingCartTotalPrice");
    let deletedCartItem = this.productService.shoppingCart.get(productID)
    this.productService.shoppingCartTotalPrice = this.productService.shoppingCartTotalPrice - (deletedCartItem[0].price*deletedCartItem[1])
    this.productService.shoppingCart.delete(productID);
    sessionStorage.setItem('shoppingCart', JSON.stringify([...this.productService.shoppingCart]));
    sessionStorage.setItem('shoppingCartTotalPrice', this.productService.shoppingCartTotalPrice);
  }

}
