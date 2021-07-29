import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "./Model/blog";

const URLcloud = 'https://api.cloudinary.com/v1_1/ddfpzl2ij/image/upload';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllBlogs() : Observable<Blog[]>{
    return this.http.get<Blog[]>("http://127.0.0.1:8000/api/blogs");
  }

  getBlogs() : Observable<Blog[]>{
    return this.http.get<Blog[]>("http://127.0.0.1:8000/api/blogs"  , { params: {publique: "yes"}});
  }

  getBlog(id: any) : Observable<Blog> {
    return this.http.get<Blog>("http://127.0.0.1:8000/api/blogs/" + id);
  }

  addBlog(blog:any){
    return this.http.post("http://127.0.0.1:8000/api/blogs", blog, {responseType:'json'});
  }

  deleteBlog(id: any) : Observable<Blog>{
    return this.http.delete<Blog>("http://127.0.0.1:8000/api/blogs/" + id );
  }

  editBlog(blog: Blog, id:any) : Observable<Blog>{
    return this.http.put<Blog>("http://127.0.0.1:8000/api/blogs/" + id, blog);
  }
  uploadImageService(imageBody)
  {
    return this.http.post<Blog>(URLcloud,imageBody);
  }
}
