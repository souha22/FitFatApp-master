import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecetteService} from "../../Recette/recette.service";

@Component({
  selector: 'app-show-recette',
  templateUrl: './show-recette.component.html',
  styleUrls: ['./show-recette.component.css']
})
export class ShowRecetteComponent implements OnInit {

  recetteId : any;
  recetteDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recettesService: RecetteService,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.recetteId = data.id;

      console.log(data)
    });

    this.recettesService.ShowRecette(this.recetteId).subscribe(recetteData => {
      this.recetteDetails = recetteData;
      console.log(recetteData)
    });
  }

}
