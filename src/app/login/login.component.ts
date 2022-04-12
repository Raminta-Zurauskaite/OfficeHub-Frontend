import { CookiesService } from './../service/cookies/cookies.service';
import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/assets/data/User';
import { DataService } from '../service/data/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: UserInterface[] = [];


  constructor(private _userService: DataService, private cookie: CookiesService) { }

  ngOnInit(): void {
    this._userService.loadUsers().subscribe(
      (data: UserInterface[]) => { this.users = data }
    );
  }

  setCookie(value: string) {
    this.cookie.setCookie("user", value);
  }

  deleteAll() {
    this.cookie.deleteAll();
  }


}
