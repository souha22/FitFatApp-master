import { Component, OnInit } from '@angular/core';
import {Recette} from "../../Recette/recette";
import {RecetteService} from "../../Recette/recette.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-all-recette',
  templateUrl: './show-all-recette.component.html',
  styleUrls: ['./show-all-recette.component.css']
})
export class ShowAllRecetteComponent implements OnInit {

  libelle;
  ing1;
  recetteList: Recette[]=[] ;
  //restoId = 0;
  constructor(private recetteService: RecetteService, private router:Router) { }

  ngOnInit(): void  {
    this.recetteService.getAllRecettes().subscribe( data =>
    { this.recetteList = data['hydra:member'];

    });



  }
  rechercher(){
    /* if (this.title == ""){
       this.ngOnInit();
     } else {
       this.listeBlogs = this.listeBlogs.filter(res => {
         return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
       });
     }*/
    this.recetteService.getRecettebyLib(this.libelle).subscribe( data =>
    { this.recetteList = data['hydra:member'];

    });


  }
  recherchere() {
    this.recetteService.getRecettebyAdresse(this.ing1).subscribe( data =>
    { this.recetteList = data['hydra:member'];

    });
  }

}
