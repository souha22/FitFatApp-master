import { Component, OnInit } from '@angular/core';
import {Recette} from "../../Recette/recette";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RecetteService} from "../../Recette/recette.service";

@Component({
  selector: 'app-update-recette',
  templateUrl: './update-recette.component.html',
  styleUrls: ['./update-recette.component.css']
})
export class UpdateRecetteComponent implements OnInit {

  recetteId : any;

  recetteDetails: Recette;
  editForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetteService: RecetteService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.recetteId = data.id;

      this.recetteService.ShowRecette(this.recetteId).subscribe(recetteData => {
        this.recetteDetails = recetteData; // get the existing data of the Recette
        //    console.log(this.recetteDetails);
      });

    });
  }

  updateRecette(form){
      this.recetteService.updateRecette(this.recetteId,this.recetteDetails).subscribe(data => {
       setTimeout(() => {
         this.router.navigateByUrl('/AdminRecetteList');
      }, 1500);
    });
  }

}
