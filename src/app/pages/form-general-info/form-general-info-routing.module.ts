import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGeneralInfoPage } from './form-general-info.page';

const routes: Routes = [
  {
    path: '',
    component: FormGeneralInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormGeneralInfoPageRoutingModule {}
