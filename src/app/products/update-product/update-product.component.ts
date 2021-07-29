import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId : number;

  productDetails: Product;
  editForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router
      ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productsService.ShowProduct(this.productId).subscribe(productData => {
        this.productDetails = productData; // get the existing data of the product
        console.log(this.productDetails);
      });

    });
  }

  updateProduct(form){

    console.log(form);

    const updateProduct = {
      id: form.value.id,
      nom: form.value.nom,
      description: form.value.description,
      prix: form.value.prix,
      Category: form.value.Category,
      img: form.value.img,

  };

    this.productsService.updateProduct(this.productId, updateProduct).subscribe(data => {
        console.log(data);
        this.router.navigate(['/products']);
    });

  }

}
