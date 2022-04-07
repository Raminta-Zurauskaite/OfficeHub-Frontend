import { UserInterface } from '../../assets/data/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityInterface } from 'src/assets/data/City';
import { BuildingInterface } from 'src/assets/data/Building';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  loadUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('./assets/data/USERS.json');
  }

  loadCities(): Observable<CityInterface[]> {
    return this.http.get<CityInterface[]>('./assets/data/CITIES.json');
  }

  loadBuildings(): Observable<BuildingInterface[]> {
    return this.http.get<BuildingInterface[]>('./assets/data/BUILDINGS.json');
  }


}
