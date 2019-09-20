import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api/api.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


export interface item{ 
     itemId: string,
  title: string,
   price: number, 
   photo: string,
   timestamp: string,
   userName:string,
   userId: string,
   location: string,
    [key: string]: string | number,
   }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) {

  }
  data = [];
  
  ngOnInit() {
    this.getItems();
  }
  

users;
totalPendingItems
totalUsers
totalActiveItems

getItems(){
  this.api.getItems().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })).subscribe(response=>{
      this.data = response;
      this.totalActiveItems = this.data.filter(item => item.status == 'active').length
      this.totalPendingItems = this.data.filter(item => item.status == 'pending').length
  })
}


getUsers(){
  this.api.getUsers().subscribe(data=>{
    this.users = this.data.filter(u => u.status !== 'admin').length
  })
}

}
