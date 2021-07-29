import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/categories/category.service';
import { Category } from 'src/app/categories/category';
import { ShowCategoryComponent } from 'src/app/categories/show-category/show-category.component';
import { AddCategoryComponent } from 'src/app/categories/add-category/add-category.component';
import { UpdateCategoryComponent } from 'src/app/categories/update-category/update-category.component';
import { DeleteCategoryComponent } from 'src/app/categories/delete-category/delete-category.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  CategoryList: Category[]=[] ;
  lastUpdate = new Date();
  constructor(private categoryService: CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe( data => 
      { this.CategoryList = data['hydra:member'];
      console.log(data)
      
  });


  }

}
