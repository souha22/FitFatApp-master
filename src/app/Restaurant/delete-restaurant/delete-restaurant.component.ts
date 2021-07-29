import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantService} from "../restaurant.service";

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent implements OnInit {

  restaurantId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantsService: RestaurantService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.restaurantId = data.id;

      this.restaurantsService.deleteRestaurant(this.restaurantId).subscribe(deleterestaurantdata => {{
        console.log('Deleted restaurant');

        this.router.navigate(['http://localhost:4200/showAllRestaurant']);
      }})
    });
  }

}
