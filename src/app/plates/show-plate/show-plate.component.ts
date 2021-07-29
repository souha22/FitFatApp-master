import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Plates} from "../plates";
import {PlatesService} from "../plates.service";

@Component({
  selector: 'app-show-plate',
  templateUrl: './show-plate.component.html',
  styleUrls: ['./show-plate.component.css']
})
export class ShowPlateComponent implements OnInit {
  platesId : any;
  platesDetails: Plates;
  constructor(
    private activatedRoute: ActivatedRoute,
    private platesService: PlatesService,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.platesId = data.id;

      console.log(data)
    });

    this.platesService.ShowPlates(this.platesId).subscribe(platesData => {
      this.platesDetails = platesData;
      console.log(platesData)
    });
  }

}
