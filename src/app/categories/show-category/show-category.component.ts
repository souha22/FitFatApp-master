import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  CategoryList: Category[]=[] ;
 
  constructor(private categoryService: CategoryService, private router:Router) { }
 

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe( data => 
      { this.CategoryList = data['hydra:member'];
      console.log(data)
      
  });
  }

}
