import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [UsersComponent, CreateComponent, ListComponent],
  imports: [
    SharedModule,
    CommonModule,
    UsersRoutingModule,

  ],

})
export class UsersModule { }
