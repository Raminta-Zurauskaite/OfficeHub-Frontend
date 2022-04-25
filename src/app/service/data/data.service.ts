import { UserInterface } from '../../../assets/data/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityInterface } from 'src/assets/data/City';
import { BuildingInterface } from 'src/assets/data/Building';
import { FloorInterface } from 'src/assets/data/Floor';
import { DeskInterface } from 'src/assets/data/Desks';
import { BookingsInterface } from 'src/assets/data/Bookings';
import { CoordinatesInterface } from 'src/assets/data/COORDINATES';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getBooking(arg0: number): Observable<BookingsInterface[]> {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  private ipAddress = 'https://officehubbackend.herokuapp.com/';

  loadUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.ipAddress + 'user');
  }

  loadCities(): Observable<CityInterface[]> {
    return this.http.get<CityInterface[]>(this.ipAddress + 'city');
  }

  loadBuildings(cityID: String): Observable<BuildingInterface[]> {
    return this.http.get<BuildingInterface[]>(
      this.ipAddress + 'building/' + cityID
    );
  }

  loadFloors(buildingID: String): Observable<FloorInterface[]> {
    return this.http.get<FloorInterface[]>(
      this.ipAddress + 'floor/' + buildingID
    );
  }

  loadFloorDesks(floorID: String): Observable<DeskInterface[]> {
    return this.http.get<DeskInterface[]>(this.ipAddress + 'desk/' + floorID);
  }

  loadBookings(userID: String): Observable<BookingsInterface[]> {
    return this.http.get<BookingsInterface[]>(
      this.ipAddress + 'booking/' + userID
    );
  }

  createBooking(
    userID: String,
    cityID: String,
    buildingID: String,
    floorID: String,
    deskID: String,
    bookingDate: String
  ) {
    this.http.post(this.ipAddress + 'booking/', {
      userID: userID,
      cityID: cityID,
      buildingID: buildingID,
      floorID: floorID,
      deskID: deskID,
      bookingDate: bookingDate,
    });
  }

  loadCoords(): Observable<CoordinatesInterface[]> {
    return this.http.get<CoordinatesInterface[]>(
      '././assets/data/COORDINATES.json'
    );
  }
}
