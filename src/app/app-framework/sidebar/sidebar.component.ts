import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { Category } from 'src/app/categories/category';

import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList : Category[]=[] ;

  constructor(private productsService: ProductsService , private router : Router ) { }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data => {
      this.categoryList = data['hydra:member'];
    });
  }

}
