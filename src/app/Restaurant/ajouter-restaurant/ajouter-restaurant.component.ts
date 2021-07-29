import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-ajouter-restaurant',
  templateUrl: './ajouter-restaurant.component.html',
  styleUrls: ['./ajouter-restaurant.component.css']
})
export class AjouterRestaurantComponent implements OnInit {
  urlImageCloud:string=""

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService, private router:Router) { }
  addForm: FormGroup;
  uploadForm: FormGroup;

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      image: ['']
    });
    this.addForm = this.formBuilder.group({
      //id: [],
      nom: ['', Validators.required],
      description: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: [, Validators.required],


    });
  }
  onSubmit(form:any) {
    let addrestaurant = {
      nom : form.nom,
      description : form.description,
      adresse : form.adresse,
      telephone : form.telephone,
      image: this.urlImageCloud
    }
    this.restaurantService.ajouterRestaurant(addrestaurant).subscribe( data => {
        console.log(data);
        this.router.navigate(['http://localhost:4200/showAllRestaurant']);
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
      this.restaurantService.uploadImageService(formData).subscribe((result)=>{
        console.log(result,"updated successfully");
        this.urlImageCloud = result["url"];
        //this.alertUpload=true;
      });
    }
  }
}
