import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetManagerPage } from './pet-manager.page';

const routes: Routes = [
  {
    path: '',
    component: PetManagerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetManagerPageRoutingModule {}