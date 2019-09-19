import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) { }



  login(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout(){

  }

  signup(data){
    this.afAuth.auth.createUserWithEmailAndPassword(data.email , data.password).then(val=>{
      val.user;
    })
  }
}
