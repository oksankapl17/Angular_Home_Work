import { Component, OnInit } from '@angular/core';
import { IHouseModel, IUserModel } from './models';
import { TodoService } from './services/todo.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  inputtedValue = '';
  formRegister = false;
  formLogin = false;
  loginInfo = '';
  showHousesList = false;
  foundHouses = [];
  housesMap = {};

  users: IUserModel[] = [
    { name: 'Viktorija', email: 'vika@gmail.com', password: '12345', is_blocked: false },
    { name: 'Tanja', email: 'tanja@gmail.com', password: '54321', is_blocked: false },
    { name: 'Ivan', email: 'ivan@gmail.com', password: '567890', is_blocked: true },
    { name: 'Igor', email: 'igor@gmail.com', password: '098765', is_blocked: false },
    { name: 'Taras', email: 'taras@gmail.com', password: '135791', is_blocked: true }
  ];

  houses: IHouseModel[] = [
    { city: 'Lviv', street: 'Shevchenka', square: 200, price: 80000, id: 1, owner: this.users[0] },
    { city: 'Kyiv', street: 'Naukova', square: 150, price: 50000, id: 2, owner: this.users[1] },
    { city: 'Dnipro', street: 'Antonycha', square: 100, price: 70000, id: 3, owner: this.users[2] },
    { city: 'Ternopil', street: 'Franka', square: 140, price: 20000, id: 4, owner: this.users[3] }
  ];

  constructor(public todoService: TodoService, public postService: PostService) {
    this.houses.map((house: IHouseModel) => (this.housesMap[house.id] = false));
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(res => {
      console.log(res);
    });
    this.postService.getPosts().subscribe(res => {
      console.log(res);
    });
  }

  onInput(value: string) {
    if (value) {
      this.inputtedValue = value;
    }
  }

  showRegisterForm() {
    this.formRegister = !this.formRegister;
    this.formLogin = false;
  }

  showLoginForm() {
    this.formLogin = !this.formLogin;
    this.formRegister = false;
  }

  showHouses() {
    this.showHousesList = !this.showHousesList;
  }

  cityFinder(value: string) {
    this.foundHouses = this.houses.filter(house => value === house.city);
  }

  addNewUserToList(newUser) {
    this.users.push(newUser);
    console.log(this.users);
  }

  sendLoginForm(userLogin) {
    const checkUserExists = this.users.find(
      ({ email, password }) => email === userLogin.email && password === userLogin.password
    );
    checkUserExists ? (this.loginInfo = 'Welcome') : (this.loginInfo = 'User not found');
  }

  getRandomOwner() {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }

  addNewHousetoList(newHouse) {
    const newHousewithAll = { ...newHouse, id: this.houses.length + 1, owner: this.getRandomOwner() };
    this.houses.push(newHousewithAll);
    this.housesMap[newHousewithAll.id] = false;
    console.log(this.houses);
  }
}
