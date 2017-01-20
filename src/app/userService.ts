import { Injectable } from '@angular/core';

export interface IUserService
{
  getUserData():IUser;
}

export interface IUser {
    name: string,
    currentCycle : number
}

@Injectable()
export class UserService implements IUserService{
  getUserData(): IUser {

    return {
    name: "Hanna",
    currentCycle : 1
  };
  }

  constructor() { }
}
