import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesClientPage } from './courses-client.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesClientPageRoutingModule {}
