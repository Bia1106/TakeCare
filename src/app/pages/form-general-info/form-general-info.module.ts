import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormGeneralInfoPageRoutingModule } from './form-general-info-routing.module';

import { FormGeneralInfoPage } from './form-general-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormGeneralInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormGeneralInfoPage]
})
export class FormGeneralInfoPageModule {}
