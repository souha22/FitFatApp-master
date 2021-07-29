import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Plates } from "../plates/plates";
import {Comment} from "../blog/Model/comment";

const URLcloud = 'https://api.cloudinary.com/v1_1/ddfpzl2ij/image/upload';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {


  constructor(private httpClient: HttpClient) {
  }

  platesurl: string = 'http://127.0.0.1:8000/api/plates';

  getAllPlates(): Observable<Plates[]> {
    return this.httpClient.get<Plates[]>(this.platesurl);
  }

  ShowPlates(platesID): Observable<Plates> {
    const platesurl = 'http://127.0.0.1:8000/api/plates/' + platesID;

    return this.httpClient.get<Plates>(platesurl);
  }

  ajouterPlates(Plates: any) {
    return this.httpClient.post(this.platesurl, Plates, {responseType: 'json'});
  }

  updatePlates(platesID, platesBody): Observable<Plates> {
    const platesurl = 'http://127.0.0.1:8000/api/plates/' + platesID;
    return this.httpClient.put<Plates>(platesurl, platesBody); // return an observable
  }

  deletePlates(platesID): Observable<Plates> {
    const platesurl = 'http://127.0.0.1:8000/api/plates/' + platesID;
    return this.httpClient.delete<Plates>(platesurl); // return an observable
  }

  getPlatesbyDes(des): Observable<Plates[]> {
    return this.httpClient.get<Plates[]>('http://127.0.0.1:8000/api/plates', {params: {description: des}});
  }

  getPlatesbyNom(NomPe): Observable<Plates[]> {
    return this.httpClient.get<Plates[]>('http://127.0.0.1:8000/api/plates', {params: {nom: NomPe}});
  }

  uploadImageService(imageBody) {
    return this.httpClient.post<Plates>(URLcloud, imageBody);
  }
  getplatesById(id){
    return this.httpClient.get<Plates>('http://127.0.0.1:8000/api/plates'+"/"+id);
  }
}
