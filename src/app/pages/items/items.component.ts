import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
  }


  goSingle(id){
    this.router.navigate(['items/' + id])
  }

  goBack(){
   this.router.navigate(['/items/all'])
  }

  goAdd(){
    this.router.navigate(['/items/add'])
  }

  data = [
    {
      itemId:'22412232',
      title: 'Costa Rico',
      description:'lorem  ipsum is the data thsat is neede  to clear and this is th efasttst',
      price:'29.99',
    },
    {
      itemId:'',
      title: 'Title 2'
    },
    {
      itemId:'',
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];

}
