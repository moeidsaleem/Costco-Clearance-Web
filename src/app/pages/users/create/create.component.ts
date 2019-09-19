import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { ApiService } from 'src/app/providers/api/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
  validateForm: FormGroup;

  tabs=[
    {title:'Basic Info', icon:'user'},
    {title:'User Type', icon:'apartment'},
    {title:'Mobile', icon:'mobile'},
    {title:'Address', icon:'home'},
    {title:'Registered', icon:'check-circle'},
  ]

  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
        
    setTimeout(() => {
      if (control.value === 'JasonWood') {
        // you have to return `{error: true}` to mark it as an error event
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  });

confirmValidator = (control: FormControl): { [s: string]: boolean } => {
  if (!control.value) {
    return { error: true, required: true };
  } else if (control.value !== this.validateForm.controls.password.value) {
    return { confirm: true, error: true };
  }
  return {};
};

  constructor(private fb:FormBuilder, private api:ApiService) { 
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      comment: ['', [Validators.required]]
    });
  }


  userTypes;

  ngOnInit() {
    this.userTypes = this.api.getUserTypes()
  }




  current = 0;

  index = 'Second-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }


  selectedUserType;
  roles;
  selectedRole;
  handleEvent(e){
    console.log('e', e)
    if(e == 'staff'){
      this.roles = this.api.getRoles();
    }
  }



}
