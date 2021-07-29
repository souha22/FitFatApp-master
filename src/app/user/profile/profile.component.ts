import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: number;

  userDetails: User;
  editForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
                  private userService: UserService,
                  private formBuilder: FormBuilder,
                  private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;

      this.userService.ShowUser(this.userId).subscribe(userData => {
        this.userDetails = userData;
        console.log("before ",this.userDetails);
      });

    });
  }

  updateUser() {

    this.userService.updateUser(this.userId, this.userDetails).subscribe(data => {
      console.log("after : ",data);
      alert("update operation is succeeded");
      this.router.navigate(['profile/'+this.userId]);
    });

  }

  deleteMyAccount() {
    if (confirm('you are about to delete your account, are you sure ?')) {

      this.userService.deleteUser(this.userId).subscribe(deleteUserdata => {
        this.router.navigate(['/home']);
      });

    }

  }



}
