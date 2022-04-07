import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/assets/data/User';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: UserInterface[] = [];

  constructor(private _userService: DataService) { }

  ngOnInit(): void {
    this._userService.loadUsers().subscribe(
      (data: UserInterface[]) => { this.users = data }
    );
  }

}
