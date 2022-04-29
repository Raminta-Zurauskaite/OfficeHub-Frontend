import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DeskInterface } from 'src/assets/data/Desks';
import { DataService } from '../service/data/data.service';
import { finalize, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CoordinatesInterface } from 'src/assets/data/Coordinates';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss'],
})
export class FloorPlanComponent implements OnInit {
  allDesks$: Observable<DeskInterface[]> = of();

  bookedDesks: Array<number> = [];

  bookedDeskNumber: Number = 0;

  selectedDate = new Date();
  location!: Array<string>;

  floor = localStorage.getItem('floorName');
  building = localStorage.getItem('buildingName');
  city = localStorage.getItem('cityName');

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.allDesks$ = this.dataService.loadFloorDesks(
      localStorage.getItem('floor')!
    );
    var localDate = new Date(
      this.selectedDate.getTime() -
        this.selectedDate.getTimezoneOffset() * 60000
    );
    this.minDate = new Date(localDate);
    localStorage.setItem('booking_date', localDate.toISOString().slice(0, 10));
    this.loadBookedDesks();
  }

  onSubmit() {
    if(!this.bookedDesks.includes(this.tableMemory)){
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
      localStorage.removeItem('floor');
      localStorage.removeItem('deskId');
      this.router.navigate(['/bookings']);
    }
  }

  onBackButtonClick() {
    localStorage.removeItem('floor');
    localStorage.removeItem('floorName');
    localStorage.removeItem('deskId');
    localStorage.removeItem('booking_date');
    this.router.navigate(['/floor']);
  }

  loadBookedDesks() {
      for (let i = 0; i < this.bookedDesks.length; i++) {
        document.getElementById(`${this.bookedDesks[i]}`)?.classList.remove('booked');
    }
    var localDate = new Date(this.selectedDate.getTime() - this.selectedDate.getTimezoneOffset() * 60000);
    localStorage.setItem('booking_date', localDate.toISOString().slice(0, 10));
    this.dataService.loadBookedFloorDesks(localStorage.getItem('floor')!, localDate.toISOString().slice(0, 10)).subscribe(res => {this.bookedDesks = res;
      for (let i = 0; i < this.bookedDesks.length; i++) {
        document.getElementById(`${this.bookedDesks[i]}`)?.classList.add('booked');
      }});
  }

  tableMemory = 0;
  onTableSelect(tableNumber: number, tableID: number) {
    var selected = document.getElementById(`${tableNumber}`);

    if (this.tableMemory != tableNumber && !this.bookedDesks.includes(tableNumber)) {
      document.getElementById(`${this.tableMemory}`)?.classList.remove('on');
      document.getElementById(`${tableNumber}`)?.classList.add('on');
      this.tableMemory = tableNumber;
      localStorage.setItem('deskId', tableID.toString());
    }
  }

  onDateChange() {
    var localDate = new Date(
      this.selectedDate.getTime() -
        this.selectedDate.getTimezoneOffset() * 60000
    );

    localStorage.setItem('booking_date', localDate.toISOString().slice(0, 10));
    this.loadBookedDesks();
  }

  isDeskSelected() {
    if (this.tableMemory == 0) {
      return false;
    } else {
      return true;
    }
  }
}
