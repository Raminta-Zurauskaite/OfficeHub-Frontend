import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CityListComponent } from './city-list/city-list.component';
import { LoginComponent } from './login/login.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { FloorListComponent } from './floor-list/floor-list.component';
import { CookieService } from 'ngx-cookie-service';
import { CharacterListComponent } from './character-list/character-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CityListComponent,
    BuildingListComponent,
    FloorListComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
