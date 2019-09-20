import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { AddComponent } from './add/add.component';
import { ApprovalsComponent } from './approvals/approvals.component';

const routes: Routes = [
  { path: '', component: ItemsComponent, children:[
    {path:'', pathMatch:'full', redirectTo:'all'},
    {path:'all',component:ListComponent},
    {path:'approvals',component:ApprovalsComponent},
    {path:'all/:id',component:SingleComponent},
    {path:'add',component:AddComponent},
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
