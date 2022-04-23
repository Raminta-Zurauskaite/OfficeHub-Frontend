import { Component, OnInit } from '@angular/core';
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
  myThumbnail = 'assets/images/20-floor.png';
  myFullresImage = 'assets/images/20-floor.png';
  allDesks$: Observable<DeskInterface[]> = of();
  bookedDesks$: Observable<DeskInterface[]> = of();

  selectedDate = new Date();
  selectedDesk = new FormControl('', [Validators.required]);

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.allDesks$ = this.dataService.loadFloorDesks(
      localStorage.getItem('floor')!
    );

    var x = document.querySelector('.table-2');
    x?.setAttribute('style', 'color: red');
    var x1 = x?.getAttribute('coords');
    console.log(x1);
  }

  onSubmit() {
    this.dataService.createBooking(
      localStorage.getItem('user')!,
      localStorage.getItem('city')!,
      localStorage.getItem('building')!,
      localStorage.getItem('floor')!,
      this.selectedDesk.value,
      this.selectedDate.toISOString().slice(0, 10)
    );
    this.router.navigate(['/bookings']);
  }

  onBackButtonClick() {
    localStorage.removeItem('deskId');
    localStorage.removeItem('booking_date');
    this.router.navigate(['/floor']);
  }

  onTableSelect(tableNumber: number) {
    if (this.tableNumberMemory)
      var selectedTable = document.querySelector(`.Table${tableNumber}`);
    selectedTable?.setAttribute('style', 'fill: #00FF11');
  }

  tableNumberMemory: number | undefined;
  tableNumberChange() {}
}
