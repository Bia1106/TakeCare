import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from './login';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'news',
    children: [
      {
        path: '',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
