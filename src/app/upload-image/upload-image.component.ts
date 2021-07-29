import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {ImageServiceService} from "src/app/upload-image/image-service.service";


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  selectedFile: ImageSnippet;

  constructor(private imageService: ImageServiceService){}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
        
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
  }

}
