import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Restaurant} from "../restaurant";

@Component({
  selector: 'app-get-restaurantby-adresse',
  templateUrl: './get-restaurantby-adresse.component.html',
  styleUrls: ['./get-restaurantby-adresse.component.css']
})
export class GetRestaurantbyAdresseComponent implements OnInit {
  Restaurantlist :Restaurant[]=[] ;
  restaurantadresse : any;
  constructor(private activatedRoute: ActivatedRoute,
              private restaurantsService: RestaurantService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.restaurantadresse = data.adresse;

      console.log(data)
    });
    this.restaurantsService.getRestaurantbyAdresse(this.restaurantadresse).subscribe((result)=>{

      this.Restaurantlist= result['hydra:member'];
     // console.log("====> ", result);
    });
  }

}
