import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      // {
      //   path: 'mystatus',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../mystatus_list/mystatus-list.module').then(m => m.MyStatusListModule)
      //     },
      //     {
      //       path: 'session/:sessionId',
      //       loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
      //     },
      //     {
      //       path: 'mystatus-details/:userId',
      //       loadChildren: () => import('../mystatus_detail/mystatus-detail.module').then(m => m.MyStatusDetailModule)
      //     }
      //   ]
      // },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
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
      {
        path: 'mystatus',
        children: [
          {
            path: '',
            loadChildren: () => import('../mystatus/mystatus.module').then(m => m.MystatusPageModule)
          }
        ]
      },
      {
        path: 'form-general-info',
        children: [
          {
            path: '',
            loadChildren: () => import('../form-general-info/form-general-info.module').then(m => m.FormGeneralInfoPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

