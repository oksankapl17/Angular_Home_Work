import { IUserModel } from './user.model';

export interface IHouseModel {
  city: string;
  street: string;
  square: number;
  price: number;
  id: number;
  owner: IUserModel;
}

export interface IHouseRegisterModel {
  city: string;
  street: string;
  square: number;
  price: number;
}
