import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookingsInterface } from 'src/assets/data/Bookings';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  bookings$: Observable<BookingsInterface[]> = of();
  selectedDate = new Date();

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.bookings$ = this.dataService.loadBookings();
  }

  onClickStartBooking() {
    this.router.navigate(['/city']);
  }

  onSelectedBookingClick() {
    this.selectedDate = new Date(2022, 4, 22);
  }
}
