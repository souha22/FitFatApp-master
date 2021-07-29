import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "../../Restaurant/restaurant.service";
import {PlatesService} from "../../plates/plates.service";

@Component({
  selector: 'app-responsable-restaurant-view',
  templateUrl: './responsable-restaurant-view.component.html',
  styleUrls: ['./responsable-restaurant-view.component.css']
})
export class ResponsableRestaurantViewComponent implements OnInit {
  id :any;
  plates: any[] = []
  platesNumber : number
  restaurant : any[] = []
  array:any = []
  constructor(private serviceresto : RestaurantService,private activatedroute : ActivatedRoute,
              private platesService: PlatesService) {

  }

  ngOnInit(): void {

    this.activatedroute.params.subscribe(data => {
      this.id = data.id;
    });

    this.serviceresto.ShowRestaurant(this.id).subscribe(restoData => {
      let copyresto = {
        nom : restoData.nom,
        description : restoData.description,
        prix : restoData.adresse,
        telephone : restoData.telephone,
        image : restoData.image
      }
      //on a utilisé ngFor dans showBlog.html et Ngfor ne fonctionne qu'avec une liste
      //alors on a crée une instance de l'entité blog qui est copyBlog
      //qui va recuperer le resultat de service getblog et aprés on l'a ajouter dans la liste blogs
      this.restaurant.push(copyresto);
    });

    this.getplates()
  }

  getplates(){
    this.serviceresto.ShowRestaurant(this.id).subscribe( data => {
      data.plates.forEach(plat => {
        this.platesService.getplatesById(plat.split("/")[3]).subscribe(plate => {

          this.plates.push(plate)
          this.platesNumber = this.plates.length;
        })
      })
    })
  }

  ajouterplates(event){
    this.platesService.ajouterPlates(event).subscribe(data => {
      this.plates.push(data)
      this.platesNumber = this.plates.length;
    })
  }

}
