import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupportPage } from "./SupportPage";

const routes: Routes = [
  {
    path: '',
    component: SupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportPageRoutingModule { }
