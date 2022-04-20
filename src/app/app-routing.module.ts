import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { FloorListComponent } from './floor-list/floor-list.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'city', component: CityListComponent },
  { path: 'building', component: BuildingListComponent },
  { path: 'floor', component: FloorListComponent },
  { path: 'desk', component: FloorPlanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
