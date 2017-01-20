import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FoodService, IFood} from './foodService.ts'
import { UserService, IUser} from './userService.ts'
import {IsValidFood} from './isValidFoodPipe'

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    IsValidFood
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [FoodService, UserService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
