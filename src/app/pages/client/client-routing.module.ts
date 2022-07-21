import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ClientPage,
    children: [
      {
        path: 'courses',
        loadChildren: () => import('./courses-client/courses-client.module').then( m => m.CoursesClientPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./notices-client/notices-client.module').then( m => m.NoticesClientPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile-client/profile-client.module').then( m => m.ProfileClientPageModule)
      },
      {
        path: 'pets',
        loadChildren: () => import('./pets-client/pets-client.module').then( m => m.PetsClientPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
