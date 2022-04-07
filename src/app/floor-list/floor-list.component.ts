import { Component, OnInit } from '@angular/core';
import { CityInterface } from 'src/assets/data/City';
import { FloorInterface } from 'src/assets/data/Floor';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-floor-list',
  templateUrl: './floor-list.component.html',
  styleUrls: ['./floor-list.component.scss']
})
export class FloorListComponent implements OnInit {

  floors: FloorInterface[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.loadFloors().subscribe(
      (data: FloorInterface[]) => { this.floors = data }
    );
  }

}
