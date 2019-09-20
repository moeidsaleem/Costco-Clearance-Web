import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SingleComponent } from './single/single.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ApprovalsComponent } from './approvals/approvals.component';


@NgModule({
  declarations: [ItemsComponent, SingleComponent, ListComponent, AddComponent, ApprovalsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ]
})
export class ItemsModule { }
