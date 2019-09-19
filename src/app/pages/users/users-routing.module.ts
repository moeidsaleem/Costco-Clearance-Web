import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '',  component: UsersComponent, children:[
    {path:'', redirectTo:'list', pathMatch:'full'},
    { path: 'create', component: CreateComponent},
    { path: 'list', component: ListComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
