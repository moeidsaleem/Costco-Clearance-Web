import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/providers/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private api:ApiService) {}


  validateForm: FormGroup;

  submitForm(): void {
    
    console.log(this.validateForm.value)
    this.api.login(this.validateForm.value.email, this.validateForm.value.password).then(response=>{
    

    })
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ["admin@admin.com", [Validators.required]],
      password: ["admin123", [Validators.required]],
      // remember: [true]
    });
  }
}
