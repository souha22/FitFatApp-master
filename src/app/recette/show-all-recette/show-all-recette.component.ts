import { Component, OnInit } from '@angular/core';
import {Recette} from "../recette";
import {RecetteService} from '../recette.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-all-recette',
  templateUrl: './show-all-recette.component.html',
  styleUrls: ['./show-all-recette.component.css']
})
export class ShowAllRecetteComponent implements OnInit {

  libellee;
  ing11;
  ing22;
  ing33;
  ing44;
  ing55;
  recetteList: Recette[]=[] ;
  constructor(private recetteService: RecetteService, private router:Router) { }

  ngOnInit(): void  {
    this.recetteService.getAllRecettes().subscribe( data =>
    { this.recetteList = data['hydra:member'];

    });



  }
  rechercher(){
     this.recetteService.getRecettebyLibelle(this.libellee).subscribe( data =>
   { this.recetteList = data['hydra:member'];
    });


  }
  recherchere() {
    this.recetteService.getRecettebyIng1(this.ing11).subscribe( data =>
    { this.recetteList = data['hydra:member'];

    });
  }

}
