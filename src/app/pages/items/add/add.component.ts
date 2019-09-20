import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { ApiService } from 'src/app/providers/api/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  constructor(private fb: FormBuilder, private api:ApiService, private router:Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      itemId: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
      photo:[null,[]]
    });
  }
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let item=this.validateForm.value
    // item.userId = this.api.currentUser.uid;
    item.userName = 'admin'

    this.api.addItem(item).then(()=>{
      console.log('item added');
      this.router.navigate(['/items/all'])
    })

  }


}
