import { Injectable } from '@angular/core';
import { Recette } from "./recette";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URLcloud = 'https://api.cloudinary.com/v1_1/ddfpzl2ij/image/upload';


@Injectable({
  providedIn: 'root'
})
export class RecetteService {


  constructor(private httpClient: HttpClient) { }
  recetteurl:string =  'http://127.0.0.1:8000/api/recettes';

  getAllRecettes(): Observable<Recette[]>{
    return this.httpClient.get<Recette[]>(this.recetteurl);
  }

  ShowRecette(recetteID): Observable<Recette>{
    const recetteurl = 'http://127.0.0.1:8000/api/recettes/'+ recetteID;

    return this.httpClient.get<Recette>(recetteurl);
  }

  ajouterRecette(Recette:any) {
    return this.httpClient.post(this.recetteurl, Recette, {responseType: 'json'});
  }

  updateRecette(recetteID, recetteBody ): Observable<Recette>{
    const recetteurl = 'http://127.0.0.1:8000/api/recettes/'+recetteID;
    return this.httpClient.put<Recette>(recetteurl, recetteBody); // return an observable
  }

  deleteRecette(recetteID): Observable<Recette>{
    const recetteurl = 'http://127.0.0.1:8000/api/recettes/' + recetteID;
    return this.httpClient.delete<Recette>(recetteurl); // return an observable
  }
  getRecettebyIng1(ingRe): Observable<Recette[]>{
    return this.httpClient.get<Recette[]>('http://127.0.0.1:8000/api/recettes'  , { params: {ing1: ingRe}});
  }
  getRecettebyLibelle(libRe): Observable<Recette[]>{
    return this.httpClient.get<Recette[]>('http://127.0.0.1:8000/api/recettes'  , { params: {libelle: libRe}});
  }
  uploadImageService(imageBody)
  {
    return this.httpClient.post<Recette>(URLcloud,imageBody);
  }


}

