import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CityListComponent } from './city-list/city-list.component';
import { LoginComponent } from './login/login.component';
import { BuildingListComponent } from './building-list/building-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CityListComponent,
    BuildingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
