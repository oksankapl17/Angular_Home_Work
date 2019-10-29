import {Component} from '@angular/core';

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
  findedHouses = [];

  houses = [
    {city: 'Lviv', street: 'Shevchenka', square: 200, price: 80000},
    {city: 'Kyiv', street: 'Naukova', square: 150, price: 50000},
    {city: 'Dnipro', street: 'Antonycha', square: 100, price: 70000},
    {city: 'Ternopil', street: 'Franka', square: 140, price: 20000},
  ];


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
     this.findedHouses = this.houses.filter(house => value === house.city);
  }
}




