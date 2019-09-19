import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs:AngularFirestore) { }




getUserTypes(){
  return this.afs.collection('userTypes').valueChanges()
}

getRoles(){
  return this.afs.collection('roles').valueChanges()
}



}
