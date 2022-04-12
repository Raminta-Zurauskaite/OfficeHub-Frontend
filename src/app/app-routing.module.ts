import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingListComponent } from './building-list/building-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { FloorListComponent } from './floor-list/floor-list.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'selectcity', component: CityListComponent },
  { path: 'selectbuilding', component: BuildingListComponent },
  { path: 'selectfloor', component: FloorListComponent },
  { path: 'selectdesk', component: FloorPlanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
