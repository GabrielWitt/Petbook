import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsClientPage } from './pets-client.page';

const routes: Routes = [
  {
    path: '',
    component: PetsClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsClientPageRoutingModule {}
