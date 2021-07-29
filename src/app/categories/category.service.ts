import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }


  CategorytUrl:string =  'http://127.0.0.1:8000/api/categories'; 
  getAllCategories(): Observable<Category>{
    return this.httpClient.get<Category>(this.CategorytUrl); 
  }

  addCategory(Category: Category) {
    return this.httpClient.post(this.CategorytUrl, Category, {responseType: 'json'});
  }

  updateCategory(categoryId, productBody): Observable<Category>{
    const CategorytUrl = 'http://127.0.0.1:8000/api/categories/'+ categoryId;
    return this.httpClient.put<Category>(CategorytUrl, productBody); // return an observable
  }

  ShowCategory(categoryId): Observable<Category>{
    const CategorytUrl = 'http://127.0.0.1:8000/api/categories/'+ categoryId;
   
    return this.httpClient.get<Category>(CategorytUrl); 
  }

  deleteCategory(categoryId): Observable<Category>{
    const CategorytUrl = 'http://127.0.0.1:8000/api/categories/' + categoryId;
    return this.httpClient.delete<Category>(CategorytUrl); // return an observable
  }

  getCategoryByNom(nomCat): Observable<Category[]>{
    const CategorytUrl = 'http://127.0.0.1:8000/api/categories/';
    return this.httpClient.get<Category[]>(CategorytUrl , { params: {nom: nomCat}}); // return an observable
  }
  getCategoryById(id: any) : Observable<Category> {
    return this.httpClient.get<Category>('http://127.0.0.1:8000/api/categories/' + id);
  }

}
