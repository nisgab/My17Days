import { Pipe, PipeTransform } from '@angular/core';
import {IFood} from "./foodService";

@Pipe({
  name: 'isValidFood',
  pure : false
})
export class IsValidFood implements PipeTransform {
  transform(food: IFood[], foodName:string, cycleNumber:number) {
    if (food) {
      console.log(foodName);
      console.log(cycleNumber);
      return food.filter(f => f.name.includes(foodName) && f.isValid[cycleNumber-1]);
    }
  }
}
