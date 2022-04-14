import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CityListComponent } from './city-list/city-list.component';
import { LoginComponent } from './login/login.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { FloorListComponent } from './floor-list/floor-list.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CityListComponent,
    BuildingListComponent,
    FloorListComponent,
    FloorPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxImageZoomModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
