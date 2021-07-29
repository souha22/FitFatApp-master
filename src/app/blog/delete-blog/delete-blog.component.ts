import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.css']
})
export class DeleteBlogComponent implements OnInit {

  id :any;
  constructor(private BlogService : BlogService, private activatedroute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.BlogService.deleteBlog(this.id).subscribe( () => {
      setTimeout(() => {
        this.router.navigate(['/admin-blog']);
      }, 0);
      });
  }
}
