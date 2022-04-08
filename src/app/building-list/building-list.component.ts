import { Component, OnInit } from '@angular/core';
import { BuildingInterface } from 'src/assets/data/Building';
import { CookiesService } from '../service/cookies/cookies.service';
import { DataService } from '../service/data/data.service';


@Component({
  selector: 'app-city-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss']
})
export class BuildingListComponent implements OnInit {
  buildings: BuildingInterface[] = [];

  constructor(private _dataService: DataService, private cookie: CookiesService) { }

  ngOnInit(): void {
    this._dataService.loadBuildings().subscribe(
      (data: BuildingInterface[]) => { this.buildings = data }
    );
  }

  setCookie(value: string) {
    this.cookie.setCookie("building", value);
  }

  deleteLastCookie() {
    this.cookie.deleteCookie("building");
    this.cookie.deleteCookie("city");
  }

}
