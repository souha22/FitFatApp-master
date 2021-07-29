import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  categoryId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private CategoryService: CategoryService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.categoryId = data.id;

      this.CategoryService.deleteCategory(this.categoryId).subscribe(deletedata => {{
        console.log('Deleted category');
        this.router.navigate(['/admin/CategoryTable']);
      }})
    });
  }

}