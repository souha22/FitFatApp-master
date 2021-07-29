import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private categoryService: CategoryService) { }
  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      //id: [],
      nom: ['', Validators.required],
    });
  }
    onSubmit() {
      this.categoryService.addCategory(this.addForm.value)
        .subscribe( data => {
          console.log(data);
         this.router.navigate(['/admin/CategoryTable']);
        });
    }


}
