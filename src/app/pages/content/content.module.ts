import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [ContentComponent, AboutComponent, ContactComponent, FaqComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
