import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecetteService} from "../../Recette/recette.service";

@Component({
  selector: 'app-delete-recette',
  templateUrl: './delete-recette.component.html',
  styleUrls: ['./delete-recette.component.css']
})
export class DeleteRecetteComponent implements OnInit {


  recetteId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recettesService: RecetteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.recetteId = data.id;

      this.recettesService.deleteRecette(this.recetteId).subscribe(deleterecettedata => {{
        console.log('Deleted recette');

        this.router.navigate(['http://localhost:4200/showAllRecette']);
      }})
    });
  }

}
