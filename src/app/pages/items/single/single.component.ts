import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/providers/api/api.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.less']
})
export class SingleComponent implements OnInit, OnDestroy {

  item;
  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) {
    console.log('data', this.route.data);
    this.item = this.api.selectedItem;
    
   }

  ngOnInit() {
  }


  delete(){
    this.api.deleteItem(this.item.id).then(res=>{
      console.log('Deletion Completed');
      this.router.navigate(['/items/all'])
    })
  }
  ngOnDestroy(){}

}
