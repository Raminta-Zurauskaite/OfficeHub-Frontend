import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DeskInterface } from 'src/assets/data/Desks';
import { DataService } from '../service/data/data.service';
import {finalize, Observable, of} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss'],
})
export class FloorPlanComponent implements OnInit {
  myThumbnail = 'assets/images/20-floor.png';
  myFullresImage = 'assets/images/20-floor.png';
  allDesks$: Observable<DeskInterface[]> = of();
  bookedDesks$: Observable<number[]> = of();

  selectedDate = new Date();
  selectedDesk = new FormControl('', [Validators.required]);

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.allDesks$ = this.dataService.loadFloorDesks(localStorage.getItem('floor')!);
    var localDate =  new Date(this.selectedDate.getTime() - this.selectedDate.getTimezoneOffset() * 60000);
    this.dataService.loadBookedFloorDesks(localStorage.getItem('floor')!, localDate.toISOString().slice(0, 10)).subscribe(res => console.log(res));
  }

  onSubmit() {
    var localDate =  new Date(this.selectedDate.getTime() - this.selectedDate.getTimezoneOffset() * 60000);
    this.dataService.createBooking(
      localStorage.getItem('user')!,
      localStorage.getItem('city')!,
      localStorage.getItem('building')!,
      localStorage.getItem('floor')!,
      this.selectedDesk.value,
      localDate.toISOString().slice(0, 10)
    ).subscribe();
    localStorage.removeItem('deskId');
    localStorage.removeItem('booking_date');
    localStorage.removeItem('city');
    localStorage.removeItem('building');
    this.router.navigate(['/bookings']);
  }

  onBackButtonClick() {
    localStorage.removeItem('floor');
    localStorage.removeItem('deskId');
    localStorage.removeItem('booking_date');
    this.router.navigate(['/floor']);
  }
}
