import { Component } from '@angular/core';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Books: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, private fb: AngularFire) {
    this.Books = fb.database.list('/books');
  }

  addBook(){
    let book = {
      id: new Date().getTime(),
      name: 'MyBook'
    }

    this.Books.push(book);
  }

}
