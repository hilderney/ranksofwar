import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UserPage } from '../pages/user/user';
import { RankPage, ProfileModal } from '../pages/rank/rank';
//import { BasicPage as ModalBasicPage, ModalContentPage } from '../pages/rank/profile';

@NgModule({
  declarations: [
    MyApp
    , HomePage
    , LoginPage
    , RegisterPage
    , UserPage
    , RankPage
    , ProfileModal
  ],
  imports: [
    BrowserModule
    , IonicModule.forRoot(MyApp)
    , IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    , HomePage
    , LoginPage
    , RegisterPage
    , UserPage
    , RankPage
    , ProfileModal

  ],
  providers: [
    StatusBar
    , SplashScreen
    , {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
