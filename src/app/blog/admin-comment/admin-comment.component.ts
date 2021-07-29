import { Component, OnInit } from '@angular/core';
import {CommentService} from "../comment.service";
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-admin-comment',
  templateUrl: './admin-comment.component.html',
  styleUrls: ['./admin-comment.component.css']
})
export class AdminCommentComponent implements OnInit {

  listeComment:any = []


  constructor(private serviceCom : CommentService, private blogService: BlogService) { }

  ngOnInit(): void {
    this.serviceCom.getAllComments().subscribe((result)=>{
      result['hydra:member'].forEach(data =>{
        this.blogService.getBlog(data.blogs.split("/")[3]).subscribe(blog => {
          let comment = {
            message : data.message,
            DatePublication: data.DatePublication,
            blogs: blog.title
          }
          this.listeComment.push(comment)
        })
      })
    });
  }

}
