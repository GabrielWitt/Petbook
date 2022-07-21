import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsClientPageRoutingModule } from './pets-client-routing.module';

import { PetsClientPage } from './pets-client.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PetsClientPageRoutingModule
  ],
  declarations: [PetsClientPage]
})
export class PetsClientPageModule {}
