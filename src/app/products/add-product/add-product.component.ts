import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ProductsService } from '../products.service';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  urlImageCloud:string=""

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router:Router) { }
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
      quantity: [, Validators.required],
      image :[]


    });
  }
  onSubmit(form:any) {
    let addproducts = {
      nom : form.nom,
      description : form.description,
      prix : form.prix,
      quantity : form.quantity,
      image: this.urlImageCloud
    }
    this.productsService.ajouterProducts(addproducts).subscribe( data => {
      console.log(data);
      this.router.navigateByUrl('/showAllProducts');
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
      this.productsService.uploadImageService(formData).subscribe((result)=>{
        console.log(result,"updated successfully");
        this.urlImageCloud = result["url"];
        //this.alertUpload=true;
      });
    }
  }
}
