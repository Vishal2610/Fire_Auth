import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyC-Btw9ZGKTDHjddRY4P-W2-IVhCLSwjCo",
  authDomain: "auth-49c2f.firebaseapp.com",
  databaseURL: "https://auth-49c2f.firebaseio.com",
  projectId: "auth-49c2f",
  storageBucket: "auth-49c2f.appspot.com",
  messagingSenderId: "583702136096"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
