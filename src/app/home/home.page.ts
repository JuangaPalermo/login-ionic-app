import { User } from './../Entities/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myUser = new User();

  constructor() {
    this.myUser = new User();
  }
}
