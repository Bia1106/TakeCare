import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MystatusPageRoutingModule } from './mystatus-routing.module';

import { MystatusPage } from './mystatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MystatusPageRoutingModule
  ],
  declarations: [MystatusPage]
})
export class MystatusPageModule {}
