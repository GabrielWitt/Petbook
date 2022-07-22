import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetManagerPageRoutingModule } from './pet-manager-routing.module';

import { PetManagerPage } from './pet-manager.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewSpecieComponent } from './new-specie/new-specie.component';
import { SpecieDetailComponent } from './specie-detail/specie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PetManagerPageRoutingModule,
    SharedModule
  ],
  declarations: [
    PetManagerPage,
    NewSpecieComponent,
    SpecieDetailComponent
  ]
})
export class PetManagerPageModule {}
