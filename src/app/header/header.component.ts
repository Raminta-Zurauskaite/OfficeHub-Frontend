import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
  }
}
