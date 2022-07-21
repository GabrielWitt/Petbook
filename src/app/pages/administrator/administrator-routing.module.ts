import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministratorPage } from './administrator.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdministratorPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../administrator/profile-manager/profile-manager.module').then( m => m.ProfileManagerPageModule),
        data: { viewName: 'Profile' }
      },
      {
        path: 'courses',
        loadChildren: () => import('./courses-manager/courses-manager.module').then( m => m.CoursesManagerPageModule),
        data: { viewName: 'Courses' }
      },
      {
        path: 'news',
        loadChildren: () => import('./notice-manager/notice-manager.module').then( m => m.NoticeManagerPageModule),
        data: { viewName: 'News' }
      },
      {
        path: 'users',
        loadChildren: () => import('./user-manager/user-manager.module').then( m => m.UserManagerPageModule),
        data: { viewName: 'Users' }
      },
      {
        path: 'pets',
        loadChildren: () => import('./pet-manager/pet-manager.module').then( m => m.PetManagerPageModule),
        data: { viewName: 'Pets' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorPageRoutingModule {}
