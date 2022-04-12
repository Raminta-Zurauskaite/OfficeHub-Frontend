import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { CookiesService } from '../service/cookies/cookies.service';
import { FormControl } from '@angular/forms';
import { DeskInterface } from 'src/assets/data/Desks';
import { DataService } from '../service/data/data.service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})
export class FloorPlanComponent implements OnInit {
  myThumbnail = "assets/images/20-floor.png";
  myFullresImage = "assets/images/20-floor.png";
  selected!: Date | null;
  select: string = '';



  desks: DeskInterface[] = [];

  constructor(private dataService: DataService, private cookie: CookiesService) { }

  ngOnInit(): void {
    this.dataService.loadDesks().subscribe(
      (data: DeskInterface[]) => { this.desks = data });
  }



  onChange(newValue: any) {
    this.setCookie(newValue);

  }

  setCookie(value: string) {
    this.cookie.setCookie("deskId", value);

  }


}
