import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {FormGroup, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  user: User;
  result: string;

  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }


  registerUser() {

    if (this.user.roles.includes("user")) {
      this.user.roles = ["UR"];
    } else if(this.user.roles.includes("rr"))
      this.user.roles = ["RR"];
    else
      this.user.roles =["ADMIN"];

    // new user have to be not verified until he confirm his registration
    this.user.verified = false;

    this.userService.addUser(this.user).subscribe(
      data => {
        alert('Welcome to fitfat');
        this.result = JSON.stringify(data);
        this.router.navigate(['/login']);
      }
    );


  }
}
