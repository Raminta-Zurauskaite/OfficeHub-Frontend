import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import {Observable, of, filter, finalize} from 'rxjs';
import { BookingsInterface } from 'src/assets/data/Bookings';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  @ViewChild('calendar', { static: false })
  calendar!: MatCalendar<Date>;
  selectedDate = new Date();
  isDisabled: boolean = true;

  bookings$: Observable<BookingsInterface[]> = of();
  selectedBookingId!: number;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.bookings$ = this.dataService.loadBookings(localStorage.getItem('user')!);
  }

  onClickStartBooking() {
    this.router.navigate(['/city']);
  }

  onSelectedBookingClick(bookingDate: string, bookingId: number) {
    this.isDisabled = false;
    this.selectedDate = new Date(bookingDate);
    this.calendar._goToDateInView(this.selectedDate, 'month');
    this.selectedBookingId = bookingId;
    console.log(this.selectedBookingId);
  }

  onCancelBookingClick() {
    this.dataService.cancelBooking(this.selectedBookingId.toString()).pipe(finalize(() =>
      {this.bookings$ = this.dataService.loadBookings(localStorage.getItem('user')!)})).subscribe();
  }

}
