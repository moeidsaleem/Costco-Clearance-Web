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
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.less']
})
export class ApprovalsComponent implements OnInit {

constructor(private api:ApiService, private router:Router) {

}
data = [];

ngOnInit() {
  this.getItems();
}


getItems(){
  this.api.getStatusItems('pending').pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })).subscribe(response=>{
    this.data = response;
    console.log('data-', this.data)
    this.listOfDisplayData = this.data;
  })
}






 sortName: string | null = null;
sortValue: string | null = null;
searchAddress: string;
// listOfName = [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }];
// listOfAddress = [{ text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' }];
listOfSearchName: string[] = [];
listOfDisplayData: Array<item>

sort(sort: { key: string; value: string }): void {
  this.sortName = sort.key;
  this.sortValue = sort.value;
  this.search();
}

filter(listOfSearchName: string[], searchAddress: string): void {
  this.listOfSearchName = listOfSearchName;
  this.searchAddress = searchAddress;
  this.search();
}

search(): void {
  /** filter data **/
  const filterFunc = (item) =>
    (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) &&
    (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.title.indexOf(name) !== -1) : true);
  const data = this.data.filter(item => filterFunc(item));
  /** sort data **/
  if (this.sortName && this.sortValue) {
    this.listOfDisplayData = data.sort((a, b) =>
      this.sortValue === 'ascend'
        ? a[this.sortName!] > b[this.sortName!]
          ? 1
          : -1
        : b[this.sortName!] > a[this.sortName!]
        ? 1
        : -1
    );
  } else {
    this.listOfDisplayData = data;
  }
}



goSingle(data){
  console.log('single-data-----', data)
  this.api.selectedItem = data;
  this.router.navigate(['/items/all/'+data.id])
}


approve(item){
  this.api.updateItem(item.id, {status: 'active'}).then(res=>{
    this.getItems()
  })
}

cancel(item){

}

}
