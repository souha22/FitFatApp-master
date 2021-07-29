import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {



  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService)
  { }
  inscriform: FormGroup;
  ngOnInit(): void {
    this.inscriform = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    })
  }

  /*
  onSubmit() {
    this.userService.addUser(this.inscriform.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['/inscription']);
      });

    console.log(this.inscriform);
    console.log(this.inscriform.value);
  }
  *
   */


}
