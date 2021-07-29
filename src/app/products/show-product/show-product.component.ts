import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  productId : any;
  productDetails: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router) { }

    ngOnInit(): void {

      this.activatedRoute.params.subscribe(data => {
        this.productId = data.id;
        
        console.log(data)
      });
  
      this.productsService.ShowProduct(this.productId).subscribe(productData => {
        this.productDetails = productData;
        console.log(productData)
      });
    }

}
