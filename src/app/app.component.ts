import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'officehub';


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
