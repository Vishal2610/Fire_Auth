import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  provider = new firebase.auth.GoogleAuthProvider;

  email: string = 'vishal.tdm@gmail.com';
  password: string = 'vishal123';

  login(){
    firebase.auth().createUserWithEmailAndPassword(this.email , this.password).then((success)=>{
      console.log(success);
      
    }).catch((err)=>{
      console.log("error");
      
      console.log(err);
      
    });
  }

  googlelogin(){
    firebase.auth().signInWithPopup(this.provider);
    firebase.auth().getRedirectResult().then((success)=>{
      console.log(success);
      
    }).catch((err)=>{
      console.log("error");
      
      console.log(err);
      
    });
  }

  logout(){
    firebase.auth().signOut().then((success)=>{
      console.log("logout");
      
      console.log(success);
      
    }).catch((err)=>{
      console.log("err");
      
      console.log(err);
      
    });
  }

}
