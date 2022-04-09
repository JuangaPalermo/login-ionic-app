import { User } from './../Entities/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  myUser: User;

  constructor() {
    this.myUser = new User();
  }

  ngOnInit() {}
}
