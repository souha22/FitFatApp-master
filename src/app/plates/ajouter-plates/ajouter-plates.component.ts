import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PlatesService} from "../plates.service";

@Component({
  selector: 'app-ajouter-plates',
  templateUrl: './ajouter-plates.component.html',
  styleUrls: ['./ajouter-plates.component.css']
})
export class AjouterPlatesComponent implements OnInit {


  urlImageCloud:string=""
  constructor(private formBuilder: FormBuilder,private router: Router, private platesService: PlatesService) { }
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
      prix: [, Validators.required],
      Restaurant: [, Validators.required],
      img: ['', Validators.required],

    });
  }

  onSubmit(form:any){
      let addplates = {
        nom : form.nom,
        description : form.description,
        prix : form.prix,
        Restaurant : form.Restaurant,
        image: this.urlImageCloud
      }

      this.platesService.ajouterPlates(addplates).subscribe(()=>{
        setTimeout(() => {
          this.router.navigate(['http://localhost:4200/ShowAllRestaurant/']);
        }, 1500);
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
      this.platesService.uploadImageService(formData).subscribe((result)=>{
        console.log(result,"updated successfully");
        this.urlImageCloud = result["url"];
        //this.alertUpload=true;
      });
    }
  }
}
