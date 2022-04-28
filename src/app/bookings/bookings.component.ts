import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Observable, of, finalize } from 'rxjs';
import { BookingsInterface } from 'src/assets/data/Bookings';
import { CoordinatesInterface } from 'src/assets/data/Coordinates';
import { DeskInterface } from 'src/assets/data/Desks';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  @ViewChild('calendar', { static: false })
  calendar!: MatCalendar<Date>;
  allDesks$: Observable<DeskInterface[]> = of();
  bookings$: Observable<BookingsInterface[]> = of();

  selectedDate = new Date();
  isDisabled: boolean = true;
  selectedBookingId!: number;

  constructor(private dataService: DataService, private router: Router) {
    this.allDesks$ = this.dataService.loadFloorDesks('1');
    this.bookings$ = this.dataService.loadBookings(
      localStorage.getItem('user')!
    );
  }

  ngOnInit(): void {}

  onClickStartBooking() {
    this.router.navigate(['/city']);
  }

  tableMemory = 0;
  onSelectedBookingClick(
    bookingDate: string,
    bookingId: number,
    tableNumber: number
  ) {
    this.isDisabled = false;
    this.selectedDate = new Date(bookingDate);
    this.calendar.activeDate = this.selectedDate;
    this.calendar.focusActiveCell;
    // this.calendar.updateTodaysDate();
    // this.calendar._goToDateInView(this.selectedDate, 'month');
    this.selectedBookingId = bookingId;
    var selected = document.getElementById(`${tableNumber}`);

    if (this.tableMemory != tableNumber) {
      selected?.classList.add('on');
      document.getElementById(`${this.tableMemory}`)?.classList.remove('on');
      this.tableMemory = tableNumber;
    }
  }

  onCancelBookingClick() {
    this.dataService
      .cancelBooking(this.selectedBookingId.toString())
      .pipe(
        finalize(() => {
          this.bookings$ = this.dataService.loadBookings(
            localStorage.getItem('user')!
          );
        })
      )
      .subscribe();
  }
}
