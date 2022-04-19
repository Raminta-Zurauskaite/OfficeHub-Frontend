import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/assets/data/User';
import { DataService } from '../service/data/data.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users$: Observable<UserInterface[]> = of();

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.users$ = this.dataService.loadUsers();
  }

  onUserSelectClick(value: number) {
    localStorage.setItem('user', value.toString());
    this.router.navigate(['/bookings']);
  }

  onClickDeleteAllCookies() {
    localStorage.clear();
    window.location.reload();
  }
}
