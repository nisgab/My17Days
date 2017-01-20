import { Injectable } from '@angular/core';

export interface IFoodService
{
  getFoodList():Array<IFood>;
}

export interface IFood {
  name: string,
  isValid : Array<boolean>
}

@Injectable()
export class FoodService implements IFoodService{
  getFoodList(): Array<IFood> {

    return predefined;
  }

  constructor() { }
}

const predefined : Array<IFood> = [
    {
        name : "שעועית",
        isValid : [true,true,true,true]
    },
    {
        name : "שעועית לבנה",
        isValid : [true,false,false,false]
    },
    {
        name : "שניצל",
        isValid : [false,false,false,false]
    },
    {
        name : "חומוס",
        isValid : [true,true,true,true]
    },
]