import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Plates} from "../plates";
import {PlatesService} from "../plates.service";

@Component({
  selector: 'app-update-plate',
  templateUrl: './update-plate.component.html',
  styleUrls: ['./update-plate.component.css']
})
export class UpdatePlateComponent implements OnInit {

  platesId : any;

  platesDetails: Plates;
  editForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private platesService: PlatesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.platesId = data.id;

      this.platesService.ShowPlates(this.platesId).subscribe(platesData => {
        this.platesDetails = platesData; // get the existing data of the Plate
      });

    });
  }
  updateplates(form){

    this.platesService.updatePlates(this.platesId,this.platesDetails).subscribe(data => {
      setTimeout(() => {
        this.router.navigate(['/showAllPlates']);
      }, 1500);
    });
  }


}
