import { UserInterface } from '../../assets/data/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  loadUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('./assets/data/USERS.json');
  }

  loadCities(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('./assets/data/CITIES.json');
  }

  loadBuilding(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('./assets/data/BUILDINGS.json');
  }


}
