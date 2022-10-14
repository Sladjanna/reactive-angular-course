import {Component, OnInit} from '@angular/core';
import { AuthStore } from './service/auth.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

    constructor(public auth : AuthStore) {
    }

   logout() {
    this.auth.logout();
  }
}
