import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn() {
    const idToken = localStorage.getItem('user');
    if (idToken) {
      return true;
    }
    else {
      return false;
    }
  }

  onBackButtonClick() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  onUserButtonClick() {
    localStorage.removeItem('floor');
    localStorage.removeItem('deskId');
    localStorage.removeItem('booking_date');
    localStorage.removeItem('city');
    localStorage.removeItem('building');
    this.router.navigate(['/bookings']);
  }
}
