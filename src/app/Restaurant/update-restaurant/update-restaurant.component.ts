import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantService} from "../restaurant.service";
import {Restaurant} from "../restaurant";

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  restaurantId : any;

  restaurantDetails: Restaurant;
  editForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.restaurantId = data.id;

      this.restaurantService.ShowRestaurant(this.restaurantId).subscribe(restaurantData => {
        this.restaurantDetails = restaurantData; // get the existing data of the Restaurant
    //    console.log(this.restaurantDetails);
      });

    });
  }

 /* updateRestaurant(form){

    console.log(form);

    const updateRestaurant = {
      id: this.restaurantId,
      nom: form.nom,
      description: form.description,
      adresse: form.adresse,
      telephone: form.telephone,
      image: form.image,

    };

    this.restaurantService.updateRestaurant( this.restaurantId , updateRestaurant).subscribe(data => {
      console.log(data);
      this.router.navigate(['/showAllRestaurant']);
    });}*/
  updateRestaurant(form){
    //this.serviceBlog.editBlog( blog , this.id ).subscribe();
  //  this.messageUser = "Article modifié avec succées !";
    this.restaurantService.updateRestaurant(this.restaurantId,this.restaurantDetails).subscribe(data => {
    //  this.messageUser = "Article modifié avec succées !";
      setTimeout(() => {
        this.router.navigate(['/showAllRestaurant']);
      }, 1500);
    });
  }
  /* updateRestaurant(form){
    //this.serviceBlog.editBlog( this.restaurantDetails , this.restaurantId ).subscribe();
   // this.messageUser = "Article modifié avec succées !";
    this.restaurantService.updateRestaurant(this.restaurantId , this.restaurantDetails).subscribe(data => {
     // this.messageUser = "Article modifié avec succées !";
      setTimeout(() => {
        this.router.navigate(['/showAllRestaurant']);
      }, 1500);
    });
  }*/

}
