import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesManagerPage } from './courses-manager.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesManagerPageRoutingModule {}
