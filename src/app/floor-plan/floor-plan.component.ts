import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../service/cookies/cookies.service';
import { FormControl, Validators } from '@angular/forms';
import { DeskInterface } from 'src/assets/data/Desks';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})
export class FloorPlanComponent implements OnInit {
  myThumbnail = "assets/images/20-floor.png";
  myFullresImage = "assets/images/20-floor.png";
  desks: DeskInterface[] = [];
  format: string = "";

  selectedDate!: Date;
  selectedDesk = new FormControl('', [Validators.required]);

  constructor(private dataService: DataService, private cookie: CookiesService) { }

  ngOnInit(): void {
    this.dataService.loadDesks().subscribe(
      (data: DeskInterface[]) => { this.desks = data });

  }

  onSubmit() {
    this.setCookie("deskId", this.selectedDesk.value);
    this.format = this.selectedDate.toISOString().slice(0, 10);
    this.setCookie("booking_date", this.format);
  }






  setCookie(name: string, value: string) {
    this.cookie.setCookie(name, value);

  }

}
