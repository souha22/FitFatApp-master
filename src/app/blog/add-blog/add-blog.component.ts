import { Component, OnInit, ViewChild } from '@angular/core';
import {BlogService} from "../blog.service";
import {Router} from "@angular/router";
import { CKEditorComponent } from 'ng2-ckeditor';
import {FormGroup,FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  messageUser : string = "";
  ckeditorContent: string
  ckeConfig: CKEDITOR.config
  alertUpload:boolean=false
  urlImageCloud:string=""
  uploadForm: FormGroup;
  constructor(private serviceBlog : BlogService, private router: Router,     private formbuilder:FormBuilder
  ) { }
  @ViewChild("myckeditor") ckeditor: CKEditorComponent;

  ngOnInit(): void {
    this.uploadForm = this.formbuilder.group({
      image: ['']
    });
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      removePlugins: 'exportpdf'
    };
  }
  Save(form:any){
    //var content = CKEDITOR.instances.editor1.getSnapshot().replace(/<\/?[^>]+(>|$)/g, "")
    let addedBlog = {
      title : form.title,
      createdBy : form.createdBy,
      content : form.content,
      //content : form.content,
      publique : form.publique,
      image: this.urlImageCloud
    }

    this.serviceBlog.addBlog(addedBlog).subscribe(()=>{
      this.messageUser = "Votre article à été bien enregistré, un administrateur va le consulter";
      setTimeout(() => {
        this.router.navigate(['/blogs']);
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
      this.serviceBlog.uploadImageService(formData).subscribe((result)=>{
        console.log(result,"updated successfully");
        this.urlImageCloud = result["url"];
        this.alertUpload=true;
      });
    }
  }


}
