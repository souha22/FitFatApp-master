import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Restaurant} from "../../Restaurant/restaurant";
import {RestaurantService} from "../../Restaurant/restaurant.service";

@Component({
  selector: 'app-admin-restaurant-list',
  templateUrl: './admin-restaurant-list.component.html',
  styleUrls: ['./admin-restaurant-list.component.css']
})
export class AdminRestaurantListComponent implements OnInit {
  restaurantList: Restaurant[]=[] ;
  lastUpdate = new Date();
  restaurantId = 0;
  constructor(private restaurantService: RestaurantService, private router:Router,private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void  {
    this.restaurantService.getAllRestaurants().subscribe( data =>
    { this.restaurantList = data['hydra:member'];

    });

    this.activatedRoute.params.subscribe(data => {
      this.restaurantId = data.id;

      this.restaurantService.deleteRestaurant(this.restaurantId).subscribe(deleterestaurantdata => {{
        console.log('Deleted restaurant');
        this.router.navigate(['/restaurants']);
      }})
    });



  }
}
