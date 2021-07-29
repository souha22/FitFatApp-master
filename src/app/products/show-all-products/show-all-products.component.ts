import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})
export class ShowAllProductsComponent implements OnInit {

  productList: Product[]=[] ;
  productId = 0;
  searchText: string;

  constructor(public productsService: ProductsService, private router:Router) { }

  ngOnInit(): void  {
    this.productsService.getAllProducts().subscribe( data =>
      { this.productList = data['hydra:member'];

  });



  }

}
