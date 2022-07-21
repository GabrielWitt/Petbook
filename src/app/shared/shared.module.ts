import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { FirstKeyPipe } from './pipes/first-key.pipe';

// Components
import { BigButtonComponent } from './components/big-button/big-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DetailHeaderComponent } from './components/detail-header/detail-header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

const components = [
  BigButtonComponent,
  UserProfileComponent,
  MainHeaderComponent,
  DetailHeaderComponent
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