import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import firebase from 'firebase';
import { NewPage } from '../new/new';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  provider = new firebase.auth.GoogleAuthProvider;

  email: string = 'vishal.tm@gmail.com';
  password: string = 'vishal123';

  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.email , this.password).then((success)=>{
      console.log(success);
      
    }).catch((err)=>{
      console.log("error");
      
      console.log(err);
      
    });
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((success)=>{
      this.navCtrl.push(NewPage);
      console.log(success);
      console.log("user");
      
      console.log(firebase.auth().currentUser);
      
      
    }).catch((err)=>{
      console.log(err);
      
    });
  }

  googlelogin(){
    firebase.auth().signInWithPopup(this.provider);
    console.log(this.provider);
    
    firebase.auth().getRedirectResult().then((success)=>{
      this.navCtrl.setRoot(NewPage);
      console.log(success);
      
    }).catch((err)=>{
      console.log("error");
      
      console.log(err);
      
    });
  }

  logout(){
    console.log(firebase.auth());
    firebase.auth().signOut().then((success)=>{
      console.log("logout");
      console.log(firebase.auth());
       
      
      
      console.log(success);
      
    }).catch((err)=>{
      console.log("err");
      
      console.log(err);
      
    });
  }

}
