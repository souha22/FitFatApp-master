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

  /* updateRecette(form){

     console.log(form);

     const updateRecette = {
       id: this.recetteId,
       nom: form.nom,
       description: form.description,
       adresse: form.adresse,
       telephone: form.telephone,
       image: form.image,

     };

     this.recetteService.updateRecette( this.recetteId , updateRecette).subscribe(data => {
       console.log(data);
       this.router.navigate(['/showAllRecette']);
     });}*/
  updateRecette(form){
    //this.serviceBlog.editBlog( blog , this.id ).subscribe();
    //  this.messageUser = "Article modifié avec succées !";
    this.recetteService.updateRecette(this.recetteId,this.recetteDetails).subscribe(data => {
      //  this.messageUser = "Article modifié avec succées !";
      setTimeout(() => {
        this.router.navigate(['/showAllRecette']);
      }, 1500);
    });
  }
  /* updateRecette(form){
    //this.serviceBlog.editBlog( this.recetteDetails , this.recetteId ).subscribe();
   // this.messageUser = "Article modifié avec succées !";
    this.recetteService.updateRecette(this.recetteId , this.recetteDetails).subscribe(data => {
     // this.messageUser = "Article modifié avec succées !";
      setTimeout(() => {
        this.router.navigate(['/showAllRecette']);
      }, 1500);
    });
  }*/


}
