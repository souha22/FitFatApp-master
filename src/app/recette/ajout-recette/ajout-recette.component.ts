import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {RecetteService} from "../recette.service";

@Component({
  selector: 'app-ajout-recette',
  templateUrl: './ajout-recette.component.html',
  styleUrls: ['./ajout-recette.component.css']
})
export class AjoutRecetteComponent implements OnInit {
  urlImageCloud:string=""

  constructor(private formBuilder: FormBuilder, private recetteService: RecetteService, private router:Router) { }
  addForm: FormGroup;
  uploadForm: FormGroup;

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      image: ['']
    });
    this.addForm = this.formBuilder.group({
      //id: [],
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      ing1: [],
      ing2: [],
      ing3: [],
      ing4: [],
      ing5: []

    });
  }
  onSubmit(form:any) {
    let addrecette = {
      libelle : form.libelle,
      description : form.description,
      ing1 : form.ing1,
      ing2 : form.ing2,
      ing3 : form.ing3,
      ing4 : form.ing4,
      ing5 : form.ing5,
      image: this.urlImageCloud
    }
    this.recetteService.ajouterRecette(addrecette).subscribe( data => {
      console.log(data);
     // this.router.navigate(['http://localhost:4200/showAllRecettes']);
      this.router.navigateByUrl('/showAllRecettes');
    });
  }
  onFileSelected(event) {

    const file:File = event.target.files[0];
    if (file) {
      let formData = new FormData();

      console.log(this.uploadForm.get('image').value+"abc");
//check if the filecount is greater than zero, to be sure a file was selected.
      formData.append('upload_preset', 'kqe7s9ah');
      formData.append('file', file);
      this.recetteService.uploadImageService(formData).subscribe((result)=>{
        console.log(result,"updated successfully");
        this.urlImageCloud = result["url"];
        //this.alertUpload=true;
      });
    }
  }

}
