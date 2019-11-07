import { Component, EventEmitter, Output } from '@angular/core';
import { IUserRegisterModel } from '../../models';

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.scss']
})
export class UserRegisterFormComponent {
  userRegister: IUserRegisterModel = {
    name: '',
    email: '',
    password: ''
  };

  @Output() addNewUser = new EventEmitter();

  constructor() {}

  getRandomBlocked() {
    return Math.random() >= 0.5;
  }

  sendRegisterForm() {
    const newUser = { ...this.userRegister, is_blocked: this.getRandomBlocked() };
    this.addNewUser.emit(newUser);
  }
}
