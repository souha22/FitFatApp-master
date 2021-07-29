import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Restaurant} from "../restaurant";
import {RestaurantService} from "../restaurant.service";

@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.component.html',
  styleUrls: ['./show-restaurant.component.css']
})
export class ShowRestaurantComponent implements OnInit {
  restaurantId : any;
  restaurantDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantsService: RestaurantService,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.restaurantId = data.id;

      console.log(data)
    });

    this.restaurantsService.ShowRestaurant(this.restaurantId).subscribe(restaurantData => {
      this.restaurantDetails = restaurantData;
      console.log(restaurantData)
    });
  }

}
