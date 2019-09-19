import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'portfolio', loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'projects', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'managers', loadChildren: () => import('./pages/managers/managers.module').then(m => m.ManagersModule) },
  { path: 'staff', loadChildren: () => import('./pages/staff/staff.module').then(m => m.StaffModule) },
  { path: 'customers', loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'about', loadChildren: () => import('./pages/content/content.module').then(m => m.ContentModule) },
  { path: 'about', loadChildren: () => import('./pages/content/content.module').then(m => m.ContentModule) },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
