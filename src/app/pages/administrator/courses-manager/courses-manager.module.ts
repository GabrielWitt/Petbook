import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesManagerPageRoutingModule } from './courses-manager-routing.module';

import { CoursesManagerPage } from './courses-manager.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CoursesManagerPageRoutingModule
  ],
  declarations: [CoursesManagerPage]
})
export class CoursesManagerPageModule {}
