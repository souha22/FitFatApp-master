import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';
import {first} from "rxjs/operators";
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  categoryId : number;

  CategoryDetails: Category;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.categoryId = data.id;

      this.categoryService.ShowCategory(this.categoryId).subscribe(Data => {
        this.CategoryDetails = Data; // get the existing data of the product
        console.log(Data);
      });

    });
  }

  updateCategory(form){

    console.log(form);

    const updateCategory = {
      id: form.value.id,
      nom: form.value.nom,


  };

    this.categoryService.updateCategory(this.categoryId, updateCategory).subscribe(data => {
        console.log(data);
        this.router.navigate(['/admin/CategoryTable']);
    });
  }
}
