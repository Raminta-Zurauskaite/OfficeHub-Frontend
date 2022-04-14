import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CityInterface } from 'src/assets/data/City';
import { DataService } from '../service/data/data.service';


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cities$: Observable<CityInterface[]> = of();

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.cities$ = this.dataService.loadCities();
  }

  onCitySelectClick(value: string) {
    this.router.navigate(['/building']);
    localStorage.setItem("city", value);
  }

  onBackButtonClick() {
    localStorage.removeItem("city");
    localStorage.removeItem("user");
    this.router.navigate(['/']);
  }

}
