import { Component, EventEmitter, Output } from '@angular/core';
import { IUserLoginModel } from '../../models';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent {
  userLogin: IUserLoginModel = {
    email: '',
    password: ''
  };

  @Output() loginUser = new EventEmitter();

  constructor() {}

  emitLoginForm() {
    this.loginUser.emit(this.userLogin);
  }
}
