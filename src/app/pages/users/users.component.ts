import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  constructor(public router:Router, private route:ActivatedRoute) {
    console.log('info', this.router.url)
   
   }

   goBack(){
     this.router
   }

  ngOnInit() {
  }

}
