import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { PlatesService } from "../../plates/plates.service";

@Component({
  selector: 'app-delete-plates',
  templateUrl: './delete-plates.component.html',
  styleUrls: ['./delete-plates.component.css']
})
export class DeletePlatesComponent implements OnInit {

  platesId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private platesService: PlatesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.platesId = data.id;

      this.platesService.deletePlates(this.platesId).subscribe(deleterestaurantdata => {{
        console.log('Deleted plate');

        this.router.navigate(['http://localhost:4200/showAllRestaurant?']);
      }})
    });
  }

}
