import { Component, OnInit } from '@angular/core';
import { ApiService } from './providers/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private api:ApiService, private router:Router){}
  
  isCollapsed = false;
  userStatus = this.api.userStatus;

  ngOnInit(){
    this.api.userChanges();
    this.api.userStatusChanges.subscribe(x=> this.userStatus = x)
    console.log(this.userStatus)
  }


  goLogin(){
    this.router.navigate(['/login'])
  }



  routes=[
    {path:'/login', title:'Login', icon:'', access:null},
    {path:'/dashboard', title:'Dashboard',  icon:'',access:null},
    {path:'/login', title:'', icon:'', access:null},
    {path:'/login', title:'', icon:'', access:null}, 
  ]
}
