import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {ActivatedRoute} from "@angular/router";
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {
  id :any;
  blogs: any[] = []
  commentsNumber : number
  comments : any[] = []
  array:any = []
  constructor(private serviceBlog : BlogService,private activatedroute : ActivatedRoute,
              private commentService: CommentService) {

  }

  ngOnInit(): void {

    this.activatedroute.params.subscribe(data => {
      this.id = data.id;
    });

    this.serviceBlog.getBlog(this.id).subscribe(blogData => {
      let copyBlog = {
        title : blogData.title,
        createdBy : blogData.createdBy,
        content : blogData.content,
        publique : blogData.publique,
        image : blogData.image
      }
      //on a utilisé ngFor dans showBlog.html et Ngfor ne fonctionne qu'avec une liste
      //alors on a crée une instance de l'entité blog qui est copyBlog
      //qui va recuperer le resultat de service getblog et aprés on l'a ajouter dans la liste blogs
      this.blogs.push(copyBlog);
    });

    this.getComments()
  }

  getComments(){
    this.serviceBlog.getBlog(this.id).subscribe( blog => {
      blog.commentaires.forEach(comment => {
        this.commentService.getCommentById(comment.split("/")[3]).subscribe(commentaire => {
          commentaire.name = "Oussama Tlili"
          this.comments.push(commentaire)
          this.commentsNumber = this.comments.length;
        })
      })
    })
  }

  ajouterCommentaire(event){
    this.commentService.addComment(event).subscribe(data => {
      this.comments.push(data)
      this.commentsNumber = this.comments.length;
    })
  }

}
