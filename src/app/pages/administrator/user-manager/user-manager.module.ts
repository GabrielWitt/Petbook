import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserManagerPageRoutingModule } from './user-manager-routing.module';

import { UserManagerPage } from './user-manager.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UserManagerPageRoutingModule
  ],
  declarations: [UserManagerPage]
})
export class UserManagerPageModule {}
