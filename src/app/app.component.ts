import {Component} from '@angular/core';
import {IHouseModel, IUserLoginModel, IUserModel} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  inputtedValue = '';
  formLogin = false;
  formRegister = false;
  housesList = false;
  foundHouses = [];
  housesMap = {};
  users: IUserModel[] = [
    {name: 'Viktorija', email: 'vika@gmail.com', password: '12345', is_blocked: false},
    {name: 'Tanja', email: 'tanja@gmail.com', password: '54321', is_blocked: false},
    {name: 'Ivan', email: 'ivan@gmail.com', password: '567890', is_blocked: true},
    {name: 'Igor', email: 'igor@gmail.com', password: '098765', is_blocked: false},
    {name: 'Taras', email: 'taras@gmail.com', password: '135791', is_blocked: true},
  ];
  houses: IHouseModel[] = [
    {city: 'Lviv', street: 'Shevchenka', square: 200, price: 80000, id: 1, owner: this.users[0]},
    {city: 'Kyiv', street: 'Naukova', square: 150, price: 50000, id: 2, owner: this.users[1]},
    {city: 'Dnipro', street: 'Antonycha', square: 100, price: 70000, id: 3, owner: this.users[2]},
    {city: 'Ternopil', street: 'Franka', square: 140, price: 20000, id: 4, owner: this.users[3]},
  ];

  userRegister: IUserModel;
  userLogin: IUserLoginModel;
  houseRegister: IHouseModel;

  constructor() {
    this.houses.map((house: IHouseModel) => this.housesMap[house.id] = false);
  }

  onInput(value: string) {
    if (value) {
      this.inputtedValue = value;
    }
  }

  showLoginForm() {
    this.formLogin = !this.formLogin;
    this.formRegister = false;
  }

  showRegisterForm() {
    this.formRegister = !this.formRegister;
    this.formLogin = false;
  }

  showHouses() {
    this.housesList = !this.housesList;
  }

  cityFinder(value: string) {
    this.foundHouses = this.houses.filter(house => value === house.city);
  }

  showFullInfo(id: number) {
    this.housesMap[id] = !this.housesMap[id];
  }

  getRandomBlocked() {
    return Math.random() >= 0.5;
  }

  getRandomOwner() {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }

  sendRegisterForm() {
    const newUser = {...this.userRegister, is_blocked: this.getRandomBlocked()};
    this.users.push(newUser);
  }

  sendLoginForm() {
    const checkUserExists = this.users.find(({email, password}) => email === this.userLogin.email && password === this.userLogin.password);
    checkUserExists ? console.log('Welcome') : console.log('User not found');
  }

  sendRegisterHouseForm() {
    const newHouse = {...this.houseRegister, id: this.houses.length + 1, owner: this.getRandomOwner()};
    this.houses.push(newHouse);
    this.housesMap[newHouse.id] = false;
  }
}






