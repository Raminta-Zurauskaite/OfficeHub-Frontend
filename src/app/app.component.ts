import { Component } from '@angular/core';
import {DataService} from "./service/data/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'officehub';

  constructor(private router: Router) {}

  ngOnInit(): void {}


}
