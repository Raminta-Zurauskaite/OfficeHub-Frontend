import { UsersInterface } from './../../assets/data/Data';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  // styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: UsersInterface[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.loadUsers().subscribe(
      (data: UsersInterface[]) => { this.users = data }
    );
  }




}
