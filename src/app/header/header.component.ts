import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userID = Number(localStorage.getItem('user'));

  constructor(private router: Router) {}

  ngOnInit(): void {}

  isLoggedIn() {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      return true;
    } else {
      return false;
    }
  }

  onBackButtonClick() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  onUserButtonClick() {
    localStorage.removeItem('floorName');
    localStorage.removeItem('floor');
    localStorage.removeItem('deskId');
    localStorage.removeItem('booking_date');
    localStorage.removeItem('cityName');
    localStorage.removeItem('city');
    localStorage.removeItem('buildingName');
    localStorage.removeItem('building');
    this.router.navigate(['/bookings']);
  }
}
