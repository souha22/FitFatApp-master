import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog/blog.service";
import {Blog} from "../blog/Model/blog";
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blog: Blog
  product: Product
  constructor(private blogService: BlogService , private productService:ProductsService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data => {
      let array = data['hydra:member']
      //this.image = array[array.length -1].image
      this.blog = array[array.length -1]
    })

    this.productService.getAllProducts().subscribe(data => {
      let array = data['hydra:member']
      //this.image = array[array.length -1].image
      this.product = array[array.length -1]
    })
  }

}
