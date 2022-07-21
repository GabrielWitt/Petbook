import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetManagerPageRoutingModule } from './pet-manager-routing.module';

import { PetManagerPage } from './pet-manager.page';
import { PetTypesComponent } from './pet-types/pet-types.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetManagerPageRoutingModule,
    SharedModule
  ],
  declarations: [
    PetManagerPage,
    PetTypesComponent,
    PetListComponent
  ]
})
export class PetManagerPageModule {}
