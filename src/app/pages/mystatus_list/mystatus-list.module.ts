import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MyStatusListPage } from './mystatus-list';
import { MyStatusListPageRoutingModule } from './mystatus-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MyStatusListPageRoutingModule
  ],
  declarations: [MyStatusListPage],
})
export class MyStatusListModule {}
