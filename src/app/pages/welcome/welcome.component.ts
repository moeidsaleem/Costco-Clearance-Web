import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
let b=    this.afs.collection('users').valueChanges()

b.subscribe(resp=>{
  console.log(resp)
})
  }

}
