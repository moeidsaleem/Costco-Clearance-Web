import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { ContentModule } from './content/content.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
 
  ],
  exports:[ HeaderModule,
    SidebarModule,
    ContentModule]
})
export class LayoutModule { }
