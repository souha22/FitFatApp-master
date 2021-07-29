import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../blog.service";
import {CommentService} from "../comment.service";
import {Comment, commentClass} from "../Model/comment";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  id
  @Input() comments
  @Input() commentsNumber
  @Output() ajouterCommentaire = new EventEmitter<any>()
  commentaire : commentClass = new commentClass();

  commentForm = this.formBuilder.group({
    message : ''
  })


  constructor(private activatedRoute:ActivatedRoute, private commentService : CommentService
  ,private blogServ :BlogService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id
    console.log(this.comments)

  }

  addComment(){
    this.commentaire.message = this.commentForm.value.message
    // @ts-ignore
    this.commentaire.DatePublication = new Date()
    this.commentaire.blogs = "/api/blogs/" + this.id
    this.ajouterCommentaire.emit(this.commentaire)
    this.commentaire.message = ''
  }

}
