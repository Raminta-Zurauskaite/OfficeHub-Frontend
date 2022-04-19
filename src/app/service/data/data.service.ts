import { UserInterface } from '../../../assets/data/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityInterface } from 'src/assets/data/City';
import { BuildingInterface } from 'src/assets/data/Building';
import { FloorInterface } from 'src/assets/data/Floor';
import { DeskInterface } from 'src/assets/data/Desks';
import { BookingsInterface } from 'src/assets/data/Bookings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  loadUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('././assets/data/USERS.json');
  }

  loadCities(): Observable<CityInterface[]> {
    return this.http.get<CityInterface[]>('././assets/data/CITIES.json');
  }

  loadBuildings(): Observable<BuildingInterface[]> {
    return this.http.get<BuildingInterface[]>('././assets/data/BUILDINGS.json');
  }

  loadFloors(): Observable<FloorInterface[]> {
    return this.http.get<FloorInterface[]>('././assets/data/FLOORS.json');
  }

  loadDesks(): Observable<DeskInterface[]> {
    return this.http.get<DeskInterface[]>('././assets/data/DESKS.json');
  }

  loadBookings(): Observable<BookingsInterface[]> {
    return this.http.get<BookingsInterface[]>('././assets/data/BOOKINGS.json');
  }
}
