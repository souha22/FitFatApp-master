import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../user/user";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  userList: User[];
  userId = 0;

  constructor(private usersService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(data => {
      this.userList = data['hydra:member'];

    });
  }
}
