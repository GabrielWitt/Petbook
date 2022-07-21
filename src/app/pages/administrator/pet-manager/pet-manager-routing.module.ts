import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';

import { PetManagerPage } from './pet-manager.page';
import { PetTypesComponent } from './pet-types/pet-types.component';

const routes: Routes = [
  {
    path: '',
    component: PetManagerPage,
    children: [
      {
        path: '',
        redirectTo: 'types',
        pathMatch: 'full'
      },
      {
        path: 'types',
        component: PetTypesComponent,
        data: {
          viewName: 'Razas',
        }
      },
      {
        path: 'list',
        component: PetListComponent,
        data: {
          viewName: 'Lista'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetManagerPageRoutingModule {}
