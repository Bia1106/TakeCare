import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStatusDetailPage } from './mystatus-detail';
import { MyStatusDetailPageRoutingModule } from './mystatus-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MyStatusDetailPageRoutingModule
  ],
  declarations: [
    MyStatusDetailPage,
  ]
})
export class MyStatusDetailModule { }
