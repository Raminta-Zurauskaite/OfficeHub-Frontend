import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DeskInterface } from 'src/assets/data/Desks';
import { DataService } from '../service/data/data.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss'],
})
export class FloorPlanComponent implements OnInit {
  allDesks$: Observable<DeskInterface[]> = of();
  bookedDesks$: Observable<DeskInterface[]> = of();

  selectedDate = new Date();
  location!: Array<string>;

  floor = localStorage.getItem('floorNumber');
  building = localStorage.getItem('buildingName');
  city = localStorage.getItem('cityName');

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.allDesks$ = this.dataService.loadFloorDesks(
      localStorage.getItem('floor')!
    );
    this.onTableSelect(1);
  }

  onSubmit() {
    this.dataService.createBooking(
      localStorage.getItem('user')!,
      localStorage.getItem('city')!,
      localStorage.getItem('building')!,
      localStorage.getItem('floor')!,
      localStorage.getItem('deskId')!,
      this.selectedDate.toISOString().slice(0, 10)
    );
    this.router.navigate(['/bookings']);
  }

  onBackButtonClick() {
    localStorage.removeItem('deskId');
    localStorage.removeItem('booking_date');
    this.router.navigate(['/floor']);
  }

  tableMemory = 0;
  onTableSelect(tableNumber: number) {
    var selected = document.getElementById(`${tableNumber}`);
    if (this.tableMemory != tableNumber) {
      selected?.classList.add('on');
      document.getElementById(`${this.tableMemory}`)?.classList.remove('on');
      this.tableMemory = tableNumber;
    }
    localStorage.setItem('deskId', tableNumber.toString());
    // localStorage.setItem('date', this.selectedDate.toISOString().slice(0, 10));
  }
}
