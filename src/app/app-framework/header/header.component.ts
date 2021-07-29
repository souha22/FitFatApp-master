import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string;


  loginStatus$ : Observable<any>

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loginStatus$ = this.userService.isLogesIn();
  }

}
