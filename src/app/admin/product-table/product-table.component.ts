import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { ShowAllProductsComponent } from 'src/app/products/show-all-products/show-all-products.component';
import { Product } from 'src/app/products/product';
import { Router,ActivatedRoute } from '@angular/router';
import { DeleteProductComponent } from 'src/app/products/delete-product/delete-product.component';
import { UpdateProductComponent } from 'src/app/products/update-product/update-product.component';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  productList: Product[]=[] ;
  lastUpdate = new Date();
  productId = 0;
  constructor(private productsService: ProductsService, private router:Router,private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void  {
    this.productsService.getAllProducts().subscribe( data => 
      { this.productList = data['hydra:member'];
      
  });

  this.activatedRoute.params.subscribe(data => {
    this.productId = data.id;

    this.productsService.deleteProduct(this.productId).subscribe(deleteProductdata => {{
      console.log('Deleted product');
      this.router.navigate(['/products']);
    }})
  });


  
  }
}
