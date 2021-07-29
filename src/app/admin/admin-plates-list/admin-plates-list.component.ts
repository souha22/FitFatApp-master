import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../Restaurant/restaurant";
import {RestaurantService} from "../../Restaurant/restaurant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Plates} from "../../plates/plates";
import {PlatesService} from "../../plates/plates.service";

@Component({
  selector: 'app-admin-plates-list',
  templateUrl: './admin-plates-list.component.html',
  styleUrls: ['./admin-plates-list.component.css']
})
export class AdminPlatesListComponent implements OnInit {

  platesList: Plates[]=[] ;
  lastUpdate = new Date();
  platesId = 0;
  constructor(private platesService: PlatesService, private router:Router,private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void  {
    this.platesService.getAllPlates().subscribe( data =>
    { this.platesList = data['hydra:member'];

    });

    this.activatedRoute.params.subscribe(data => {
      this.platesId = data.id;

      this.platesService.deletePlates(this.platesId).subscribe(deleterestaurantdata => {{
        console.log('Deleted restaurant');
        this.router.navigate(['/restaurants']);
      }})
    });



  }
}
