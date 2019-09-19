import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ProjectsComponent, CreateComponent, ListComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
