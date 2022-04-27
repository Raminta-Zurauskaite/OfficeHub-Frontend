import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DeskInterface } from 'src/assets/data/Desks';
import { DataService } from '../service/data/data.service';
import { finalize, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { CoordinatesInterface } from 'src/assets/data/Coordinates';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss'],
})
export class FloorPlanComponent implements OnInit {
  allDesks$: Observable<DeskInterface[]> = of();
  bookedDesks$: Observable<number[]> = of();

  selectedDate = new Date();
  location!: Array<string>;

  floor = localStorage.getItem('floorName');
  building = localStorage.getItem('buildingName');
  city = localStorage.getItem('cityName');

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.allDesks$ = this.dataService.loadFloorDesks(localStorage.getItem('floor')!);
    var localDate = new Date(this.selectedDate.getTime() - this.selectedDate.getTimezoneOffset() * 60000);
    this.bookedDesks$ = this.dataService.loadBookedFloorDesks(localStorage.getItem('floor')!, localDate.toISOString().slice(0, 10));
  }

  onSubmit() {
    var localDate = new Date(
      this.selectedDate.getTime() -
        this.selectedDate.getTimezoneOffset() * 60000
    );
    this.dataService
      .createBooking(
        localStorage.getItem('user')!,
        localStorage.getItem('city')!,
        localStorage.getItem('building')!,
        localStorage.getItem('floor')!,
        localStorage.getItem('deskId')!,
        localStorage.getItem('booking_date')!
      )
      .subscribe();
    localStorage.removeItem('city');
    localStorage.removeItem('building');
    localStorage.removeItem('booking_date');
    localStorage.removeItem('deskId');
    this.router.navigate(['/bookings']);
  }

  onBackButtonClick() {
    localStorage.removeItem('floor');
    localStorage.removeItem('deskId');
    localStorage.removeItem('booking_date');
    this.router.navigate(['/floor']);
  }

  tableMemory = 0;
  onTableSelect(tableNumber: number, tableID: number) {
    var selected = document.getElementById(`${tableNumber}`);
    if (this.tableMemory != tableNumber) {
      selected?.classList.add('on');
      document.getElementById(`${this.tableMemory}`)?.classList.remove('on');
      this.tableMemory = tableNumber;
    }
    localStorage.setItem('deskId', tableID.toString());
  }

  onDateChange() {
    var localDate = new Date(
      this.selectedDate.getTime() -
      this.selectedDate.getTimezoneOffset() * 60000
    );
    /*for (let i = 0; i <= 46; i++) {
      var booked = document.getElementById(`${i}`);
      if (booked === this.bookedDesks$) {
        booked?.classList.add('booked');
        document.getElementById(`${this.tableMemory}`)?.classList.remove('booked');
      }
    }*/

    localStorage.setItem('booking_date', localDate.toISOString().slice(0, 10));
  }
}
