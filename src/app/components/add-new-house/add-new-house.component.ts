import { Component, EventEmitter, Output } from '@angular/core';
import { IHouseRegisterModel } from '../../models';

@Component({
  selector: 'app-add-new-house',
  templateUrl: './add-new-house.component.html',
  styleUrls: ['./add-new-house.component.scss']
})
export class AddNewHouseComponent {
  houseRegister: IHouseRegisterModel = {
    city: '',
    street: '',
    square: 0,
    price: 0
  };
  @Output() addNewHouse = new EventEmitter();

  constructor() {}

  sendRegisterHouseForm() {
    this.addNewHouse.emit(this.houseRegister);
  }
}
