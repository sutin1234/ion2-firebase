import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyCRlsWIcW9exZ5x7J4RHoanZmFogu5syow",
  authDomain: "ion2-firebase-7ab1e.firebaseapp.com",
  databaseURL: "https://ion2-firebase-7ab1e.firebaseio.com",
  storageBucket: "ion2-firebase-7ab1e.appspot.com",
  messagingSenderId: "455611937283"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
