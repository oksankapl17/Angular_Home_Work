export interface IUserModel {
  name: string;
  email: string;
  password: string;
  is_blocked: boolean;
}

export interface IUserLoginModel {
  email: string;
  password: string;
}

export interface IUserRegisterModel {
  name: string;
  email: string;
  password: string;
}
