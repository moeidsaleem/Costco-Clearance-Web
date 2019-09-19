import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private afs:AngularFirestore,
    private router:Router,
    private afAuth:AngularFireAuth,
    private ngZone: NgZone
    ) { 
  }



  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus)



  setUserStatus(userStatus: any){
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus)
  }


login(email, password){
   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
   .then(data=>{
     this.afs.doc('users/' + data.user.uid)
     .get().subscribe(response=>{
       this.currentUser = response.data();
       this.setUserStatus(this.currentUser); 
       if(response.data().role !== "admin"){
         this.router.navigate(['/'])
       }else{
         this.router.navigate(['/admin'])
       }
     })
   })



}


signUp(email, password){
  this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  .then( response =>{
    let user = {
      id: response.user.uid, 
      email: response.user.email, 
      role: "user"
    }
    this.afs.collection('users').add(user)
    .then(user=>{
      user.get().then(x => {
        console.log(x.data());
        this.currentUser = x.data();
        this.setUserStatus(this.currentUser);
        this.router.navigate(['/']);
      }).catch(err=> console.log(err))
    })
  })
}


logOut(){
  this.afAuth.auth.signOut()
  .then(()=>{
    this.currentUser = null;
    this.setUserStatus(null);
    this.router.navigate(['/login'])
  }).catch(err=>{ console.log('Error-logout', err)})
}

userChanges(){
  this.afAuth.auth.onAuthStateChanged(currentUser => {
    if(currentUser){
      this.afs.collection('users').ref.where('email', '==',currentUser.email)
      .onSnapshot(snap => {
        snap.forEach(userRef =>{
          this.currentUser = userRef.data();

          this.setUserStatus(this.currentUser);
          console.log('user-status', this.userStatus);

          if(userRef.data().role !== "admin"){
            this.ngZone.run(() => this.router.navigate(['/']))
          }else{
            this.ngZone.run(() => this.router.navigate(['/dashboard']) )
          }
        })
      })
      // this.afs.collection([''])
    }
  })
}




updateusers(uid, data){
  return this.afs.doc('users/'+uid).update(data);
}



getUserTypes(){
  return this.afs.collection('userTypes').valueChanges()
}

getRoles(){
  return this.afs.collection('roles').valueChanges()
}



}
