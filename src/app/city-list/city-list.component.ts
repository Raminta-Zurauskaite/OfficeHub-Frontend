import { Component, OnInit } from '@angular/core';
import { CityInterface } from 'src/assets/data/City';
import { CookiesService } from '../service/cookies/cookies.service';
import { DataService } from '../service/data/data.service';


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cities: CityInterface[] = [];

  constructor(private _dataService: DataService, private cookie: CookiesService) { }

  ngOnInit(): void {
    this._dataService.loadCities().subscribe(
      (data: CityInterface[]) => { this.cities = data }
    );
  }

  setCookie(value: string) {
    this.cookie.setCookie("city", value);
  }

  deleteLastCookie() {
    this.cookie.deleteCookie("city");
    this.cookie.deleteCookie("user");
  }

}
