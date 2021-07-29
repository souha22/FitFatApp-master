import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "./Model/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {}


  getAllComments(): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>('http://127.0.0.1:8000/api/commentaires');
  }
  addComment(comment: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/commentaires', comment, {responseType:'json'});
  }
  deleteComment(id: Number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/commentaires'+'/'+id)
  }
  updateComment(comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>('http://127.0.0.1:8000/api/commentaires'+'/'+comment.id, Comment);
  }

  getCommentById(id){
    return this.httpClient.get<Comment>('http://127.0.0.1:8000/api/commentaires'+"/"+id);
  }
}
