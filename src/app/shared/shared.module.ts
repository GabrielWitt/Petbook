import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { FirstKeyPipe } from './pipes/first-key.pipe';

// Components
import { UserProfileComponent } from './components/user-profile/user-profile.component';

// General view
import { BigButtonComponent } from './components/view/big-button/big-button.component';
import { MainHeaderComponent } from './components/view/main-header/main-header.component';
import { DetailHeaderComponent } from './components/view/detail-header/detail-header.component';
import { NotDataYetMessageComponent } from './components/view/not-data-yet-message/not-data-yet-message.component';

// General view

const components = [
  BigButtonComponent,
  UserProfileComponent,
  MainHeaderComponent,
  DetailHeaderComponent,
  NotDataYetMessageComponent
]
const pipes = [
  FirstKeyPipe
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...pipes,
    ...components
  ],
  exports: [
    ...pipes,
    ...components
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SharedModule { }