import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookieService: CookieService) { }

  setCookie(name: string, value: string) {
    this.cookieService.set(name, value);
  }

  deleteCookie(name: string) {
    this.cookieService.delete(name);
  }

  deleteAll() {
    this.cookieService.deleteAll();
  }
}
