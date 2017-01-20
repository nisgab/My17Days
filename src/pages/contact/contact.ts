import { Component } from '@angular/core';
import { FoodService, IFood} from '../../app/foodService'
import { UserService, IUser} from '../../app/userService'
import { NavController } from 'ionic-angular';
import { IsValidFood} from '../../app/isValidFoodPipe'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  foodList : Array<IFood>;
  userData : IUser;
  foodToSearch : string;

  constructor(public navCtrl: NavController, private foodService : FoodService, private userService: UserService) {
    this.foodList = foodService.getFoodList();
    this.userData = userService.getUserData();

    console.log(this.userData);
  }
}
