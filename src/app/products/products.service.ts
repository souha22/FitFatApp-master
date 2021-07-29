import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product'
import { Observable } from 'rxjs';
import { Category } from '../categories/category';

const URLcloud = 'https://api.cloudinary.com/v1_1/ddfpzl2ij/image/upload';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  productUrl:string =  'http://127.0.0.1:8000/api/products';
  shoppingCart =  new Map()
  shoppingCartTotalPrice:any = 0;

  currentProduct: { img: string; Category: string; quantity: number; prix: number; "@type": string; description: string; "@id": string; id: null; "@context": string; nom: string } = {
    "@context": "string",
    "@id": "string",
    "@type": "string",
    id: null,
    "nom": "string",
    "description": "string",
    prix: 0,
    "Category": "string",
    "img": "string",
    quantity: 0
  }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productUrl);
  }

  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://127.0.0.1:8000/api/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  searchProductsByCategory(CategoryId): Observable<Product[]>{
    const productUrl = 'http://127.0.0.1:8000/api/products';
    return this.httpClient.get<Product[]>(productUrl , { params: {Category: CategoryId}});
  }


  ShowProduct(productId): Observable<Product>{
    const productUrl = 'http://127.0.0.1:8000/api/products/'+ productId;

    return this.httpClient.get<Product>(productUrl);
  }

  addProduct(Product: any) {
    const headers = new HttpHeaders()
      .append('Content-Type' , 'application/json');

    return this.httpClient.post("http://127.0.0.1:8000/api/products", Product, { headers: headers });
  }

  updateProduct(productId, productBody): Observable<Product>{
    const productUrl = 'http://127.0.0.1:8000/api/products/'+ productId;
    return this.httpClient.put<Product>(productUrl, productBody); // return an observable
  }

  deleteProduct(productId): Observable<Product>{
    const productUrl = 'http://127.0.0.1:8000/api/products/' + productId;
    return this.httpClient.delete<Product>(productUrl); // return an observable
  }

  addProductToShoppingCart(product:Product, quantity:number){
    this.shoppingCart = new Map(JSON.parse(sessionStorage.getItem("shoppingCart")));
    this.shoppingCartTotalPrice = sessionStorage.getItem("shoppingCartTotalPrice");
    if (this.shoppingCart.has(product.id)){
      let oldQuantity = this.shoppingCart.get(product.id)[1];
      let newQuantity = quantity+oldQuantity;
      let cartItem = [product,newQuantity]
      this.shoppingCart.set(product.id,cartItem)
    }
    else{
      let cartItem = [product,quantity]
      this.shoppingCart.set(product.id,cartItem)
    }
    this.shoppingCartTotalPrice=Number(this.shoppingCartTotalPrice)+product.prix*quantity

    console.log(this.shoppingCart)
    console.log(this.shoppingCartTotalPrice)
    sessionStorage.setItem('shoppingCart', JSON.stringify([...this.shoppingCart]));
    sessionStorage.setItem('shoppingCartTotalPrice', this.shoppingCartTotalPrice);
  }

  // public uploadImage(image: File): any {
  //   const formData = new FormData();

  //   formData.append('image', image);

  //   return this.httpClient.post('http://127.0.0.1:8000/api/products', formData);
  //   console.log(formData);
  // }


  uploadImageService(imageBody)
  {
    return this.httpClient.post<Product>(URLcloud,imageBody);
  }
}

