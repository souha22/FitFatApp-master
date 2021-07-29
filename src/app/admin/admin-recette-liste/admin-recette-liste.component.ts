import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Recette} from "../../recette/recette";
import {RecetteService} from "../../recette/recette.service";

@Component({
  selector: 'app-admin-recette-list',
  templateUrl: './admin-recette-liste.component.html',
  styleUrls: ['./admin-recette-liste.component.css']
})
export class AdminRecetteListeComponent implements OnInit {
  recetteList: Recette[]=[] ;
  lastUpdate = new Date();
  recetteId = 0;
  constructor(private recetteService: RecetteService, private router:Router,private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void  {
    this.recetteService.getAllRecettes().subscribe( data =>
    { this.recetteList = data['hydra:member'];

    });

    this.activatedRoute.params.subscribe(data => {
      this.recetteId = data.id;

      this.recetteService.deleteRecette(this.recetteId).subscribe(deleterecettedata => {{
        console.log('Deleted recette');
        this.router.navigate(['/recettes']);
      }})
    });



  }
}
