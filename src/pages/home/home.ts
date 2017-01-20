import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { UserService, IUser} from '../../app/userService'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 userData : any = {
    name: "Hanna",
    startingDate: '2016-01-20',
    currentCycle : 1
  };

  constructor(public navCtrl: NavController, private userService: UserService) {
        this.userData = userService.getUserData();
  }

}
