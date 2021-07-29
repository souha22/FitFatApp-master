import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';
import {Restaurant} from "../restaurant";

@Component({
  selector: 'app-show-all-restaurant',
  templateUrl: './show-all-restaurant.component.html',
  styleUrls: ['./show-all-restaurant.component.css']
})
export class ShowAllRestaurantComponent implements OnInit {
nomm;
adressse;
  restaurantList: Restaurant[]=[] ;
  //restoId = 0;
  constructor(private restaurantService: RestaurantService, private router:Router) { }

  ngOnInit(): void  {
    this.restaurantService.getAllRestaurants().subscribe( data =>
    { this.restaurantList = data['hydra:member'];

    });



  }
  rechercher(){
   /* if (this.title == ""){
      this.ngOnInit();
    } else {
      this.listeBlogs = this.listeBlogs.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }*/
    this.restaurantService.getRestaurantbyNom(this.nomm).subscribe( data =>
    { this.restaurantList = data['hydra:member'];

    });


  }
  recherchere() {
    this.restaurantService.getRestaurantbyAdresse(this.adressse).subscribe( data =>
    { this.restaurantList = data['hydra:member'];

    });
  }

}



