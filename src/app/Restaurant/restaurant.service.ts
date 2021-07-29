import { Injectable } from '@angular/core';
import { Restaurant } from "./restaurant";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URLcloud = 'https://api.cloudinary.com/v1_1/ddfpzl2ij/image/upload';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  constructor(private httpClient: HttpClient) { }
  restauranturl:string =  'http://127.0.0.1:8000/api/restaurants';

  getAllRestaurants(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(this.restauranturl);
  }

  ShowRestaurant(restaurantID): Observable<Restaurant>{
    const restauranturl = 'http://127.0.0.1:8000/api/restaurants/'+ restaurantID;

    return this.httpClient.get<Restaurant>(restauranturl);
  }

  ajouterRestaurant(Restaurant:any) {
    return this.httpClient.post(this.restauranturl, Restaurant, {responseType: 'json'});
  }

  updateRestaurant(restaurantID, restaurantBody ): Observable<Restaurant>{
    const restauranturl = 'http://127.0.0.1:8000/api/restaurants/'+restaurantID;
    return this.httpClient.put<Restaurant>(restauranturl, restaurantBody); // return an observable
  }

  deleteRestaurant(restaurantID): Observable<Restaurant>{
    const restauranturl = 'http://127.0.0.1:8000/api/restaurants/' + restaurantID;
    return this.httpClient.delete<Restaurant>(restauranturl); // return an observable
  }
  getRestaurantbyAdresse(adresseRe): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>('http://127.0.0.1:8000/api/restaurants'  , { params: {adresse: adresseRe}});
  }
  getRestaurantbyNom(NomRe): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>('http://127.0.0.1:8000/api/restaurants'  , { params: {nom: NomRe}});
  }
  uploadImageService(imageBody)
  {
    return this.httpClient.post<Restaurant>(URLcloud,imageBody);
  }


}

