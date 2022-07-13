import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministratorPage } from './administrator.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdministratorPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home-manager/home-manager.module').then( m => m.HomeManagerPageModule),
        data: {
          viewName: 'Home'
        }
      },
      {
        path: 'profile',
        loadChildren: () => import('../administrator/profile-manager/profile-manager.module').then( m => m.ProfileManagerPageModule),
        data: {
          viewName: 'Home'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorPageRoutingModule {}
