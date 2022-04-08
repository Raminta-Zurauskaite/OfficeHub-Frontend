import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingListComponent } from './building-list/building-list.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { FloorListComponent } from './floor-list/floor-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'city', component: CityListComponent },
  { path: 'building', component: BuildingListComponent },
  { path: 'floor', component: FloorListComponent },
  { path: 'character', component: CharacterListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
