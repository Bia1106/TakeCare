import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyStatusDetailPage } from './mystatus-detail';

const routes: Routes = [
  {
    path: '',
    component: MyStatusDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStatusDetailPageRoutingModule { }
