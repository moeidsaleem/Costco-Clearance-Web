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


  selectedItem;





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
         this.router.navigate(['/login']);
         alert('Sorry! Your Profile does not have the permissiont to access the Panel')
       }else{
         this.router.navigate(['/items/approvals'])
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
          console.log('user status ', this.currentUser)
          console.log('user-status- use rmil gya', userRef.data());

          if(userRef.data().role !== "admin"){
            this.ngZone.run(() => this.router.navigate(['/login']))
            console.log('login chala')
          }else{
            this.ngZone.run(() => this.router.navigate(['/dashboard']) )
            console.log('dashboard chala')

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



getUsers(){
  return this.afs.collection('users').valueChanges()
}




/* ITEMS */
getItems(){
return  this.afs.collection('items').snapshotChanges();
}

getStatusItems(status = 'pending'){

this.afs.collection("cities").get().subscribe(function(querySnapshot) {      
  console.log(querySnapshot.size); 
});
  //status == 'disabled' - 'pending' - 'active'
  return  this.afs.collection('items', ref=> ref.where('status', '==', status)).snapshotChanges();
  }


getSingeItem(id){
return this.afs.doc('items/'+id).valueChanges();


}
addItem(data){
  console.log('data', data)
  data.status = 'pending';
  data.location = ''

  return this.afs.collection<any>('items').add(data)
}
deleteItem(id){
  return this.afs.doc('items/'+id).delete();
}
updateItem(id, data){
  return this.afs.doc('items/'+id).update(data);
}





}
