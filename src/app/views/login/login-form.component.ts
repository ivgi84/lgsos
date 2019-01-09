import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lgos-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('login form')
  }

}
