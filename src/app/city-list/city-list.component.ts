import { Component, OnInit } from '@angular/core';
import { CityInterface } from 'src/assets/data/City';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cities: CityInterface[] = [];

  constructor(private _cityService: DataService) { }

  ngOnInit(): void {
    this._cityService.loadCities().subscribe(
      (data: CityInterface[]) => { this.cities = data }
    );
  }

}
