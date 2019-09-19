import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//basic ant modules
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCardModule } from 'ng-zorro-antd/card';

import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDescriptionsModule, NzTagModule, NzTabsModule, NzStepsModule } from 'ng-zorro-antd';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    NzButtonModule,
    NzTableModule,
    NzCardModule,
    NzNotificationModule,
    NzDividerModule,
    NzEmptyModule,
    ReactiveFormsModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    NzPageHeaderModule,
    NzDropDownModule,
    NzDescriptionsModule,
    NzTagModule,
    NzTabsModule,
    NzStepsModule,
    NzSelectModule,
    NzInputNumberModule
  ]
})
export class SharedModule { }
