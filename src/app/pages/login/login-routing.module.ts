import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { LoginComponent } from './login.component';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';

const routes: Routes = [{ path: '', component: LoginComponent,  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
