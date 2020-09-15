import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyStatusListPage } from './mystatus-list';
const routes: Routes = [
  {
    path: '',
    component: MyStatusListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStatusListPageRoutingModule {}
