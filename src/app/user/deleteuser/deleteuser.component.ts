import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";


@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  userId = 0;
  constructor(private activatedRoute: ActivatedRoute,
              private UserService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;

      this.UserService.deleteUser(this.userId).subscribe(deleteUserdata => {{
        confirm('you are about to delete your account, are you sure ?');
        this.router.navigate(['/home']);
      }})
    });
  }

}
