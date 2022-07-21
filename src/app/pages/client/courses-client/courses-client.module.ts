import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesClientPageRoutingModule } from './courses-client-routing.module';

import { CoursesClientPage } from './courses-client.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CoursesClientPageRoutingModule
  ],
  declarations: [CoursesClientPage]
})
export class CoursesClientPageModule {}
