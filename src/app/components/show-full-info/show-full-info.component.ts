import { Component, EventEmitter, Output, Input } from '@angular/core';
import { IHouseModel } from '../../models';

@Component({
  selector: 'app-show-full-info',
  templateUrl: './show-full-info.component.html',
  styleUrls: ['./show-full-info.component.scss']
})
export class ShowFullInfoComponent {
  @Input() houses: IHouseModel[];
  @Input() housesMap: object;

  constructor() {}

  showFullInfo(id: number) {
    this.housesMap[id] = !this.housesMap[id];
  }
}
