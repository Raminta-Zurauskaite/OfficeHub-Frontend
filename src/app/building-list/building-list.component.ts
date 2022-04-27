import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BuildingInterface } from 'src/assets/data/Building';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss'],
})
export class BuildingListComponent implements OnInit {
  buildings$: Observable<BuildingInterface[]> = of();

  cityName = localStorage.getItem('cityName');

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.buildings$ = this.dataService.loadBuildings(
      localStorage.getItem('city')!
    );
  }

  onBuildingSelectClick(value: number, name: string) {
    this.router.navigate(['/floor']);
    localStorage.setItem('building', value.toString());
    localStorage.setItem('buildingName', name);
  }

  onBackButtonClick() {
    localStorage.removeItem('building');
    localStorage.removeItem('city');
    this.router.navigate(['/city']);
  }
}
