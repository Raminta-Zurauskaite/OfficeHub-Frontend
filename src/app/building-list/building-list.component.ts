import { Component, OnInit } from '@angular/core';
import { BuildingInterface } from 'src/assets/data/Building';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss']
})
export class BuildingListComponent implements OnInit {
  buildings: BuildingInterface[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.loadBuildings().subscribe(
      (data: BuildingInterface[]) => { this.buildings = data }
    );
  }

}
