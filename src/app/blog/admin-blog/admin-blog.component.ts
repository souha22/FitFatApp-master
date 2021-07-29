import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {Blog} from "../Model/blog";

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  listeBlogs:any;

  constructor(private serviceBlog : BlogService) { }

  ngOnInit(): void {
    this.serviceBlog.getAllBlogs().subscribe((result)=>{
      this.listeBlogs= result['hydra:member'];
    });
  }


}
