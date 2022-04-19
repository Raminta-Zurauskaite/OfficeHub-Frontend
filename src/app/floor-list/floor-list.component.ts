import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FloorInterface } from 'src/assets/data/Floor';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-floor-list',
  templateUrl: './floor-list.component.html',
  styleUrls: ['./floor-list.component.scss'],
})
export class FloorListComponent implements OnInit {
  floors$: Observable<FloorInterface[]> = of();

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.floors$ = this.dataService.loadFloors(localStorage.getItem('building')!);
  }

  onBuildingSelectClick(value: number) {
    this.router.navigate(['/desk']);
    localStorage.setItem('floor', value.toString());
  }

  onBackButtonClick() {
    localStorage.removeItem('floor');
    localStorage.removeItem('building');
    this.router.navigate(['/building']);
  }
}
