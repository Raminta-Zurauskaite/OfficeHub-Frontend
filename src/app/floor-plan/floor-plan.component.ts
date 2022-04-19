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
  desks$: Observable<DeskInterface[]> = of();

  selectedDate = new Date();
  selectedDesk = new FormControl('', [Validators.required]);

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.desks$ = this.dataService.loadDesks();
  }

  onSubmit() {
    localStorage.setItem('deskId', this.selectedDesk.value);
    localStorage.setItem(
      'booking_date',
      this.selectedDate.toISOString().slice(0, 10)
    );
    this.router.navigate(['/bookings']);
  }

  onBackButtonClick() {
    localStorage.removeItem('deskId');
    localStorage.removeItem('booking_date');
    this.router.navigate(['/floor']);
  }
}
