import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent implements OnInit {
  id :any;

  constructor(private commentService : CommentService, private activatedroute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.commentService.deleteComment(this.id).subscribe( () => {
      setTimeout(() => {
        this.router.navigate(['/admin-comment']);
      }, 0);
    });
  }

}
