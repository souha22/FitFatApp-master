import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  user: User;
  result: string;


  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  login() {


    console.log("user from login : ",this.user);

      this.userService.loginUser(this.user).subscribe(
       data => {
         this.result = JSON.stringify(data);

         if (this.result.includes("ADMIN"))
           this.router.navigate(['/admin']);
         else
           this.router.navigate(['/home']);


       }
     );

  }
}
