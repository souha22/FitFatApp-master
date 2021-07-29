import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Blog} from "../Model/blog";

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  id :any;
  blog: Blog;
  messageUser :any;
  constructor(private serviceBlog : BlogService,private activatedroute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data => {
      this.id = data.id;
      this.serviceBlog.getBlog(this.id).subscribe(blogData => {
        this.blog = blogData; // get the existing data of the product
    });
  });
  }

  edit(form){
    //this.serviceBlog.editBlog( blog , this.id ).subscribe();
    this.messageUser = "Article modifié avec succées !";
      this.serviceBlog.editBlog(this.blog,this.id).subscribe(data => {
        this.messageUser = "Article modifié avec succées !";
        setTimeout(() => {
          this.router.navigate(['/admin-blog']);
        }, 1500);
      });
  }

}

