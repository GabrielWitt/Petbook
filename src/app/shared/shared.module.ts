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
import { NewPetComponent } from './components/new-pet/new-pet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingViewComponent } from './components/view/loading-view/loading-view.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { TimeHandlerModule } from './utilities/time-handler';
import { NewNoticeComponent } from './components/new-notice/new-notice.component';
import { NewCourseComponent } from './components/new-course/new-course.component';

// General view

const components = [
  BigButtonComponent,
  UserProfileComponent,
  MainHeaderComponent,
  DetailHeaderComponent,
  NotDataYetMessageComponent,
  NewPetComponent,
  NewNoticeComponent,
  NewCourseComponent,
  LoadingViewComponent
]
const pipes = [
  FirstKeyPipe,
  TimeFormatPipe
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TimeHandlerModule
  ],
  declarations: [
    ...pipes,
    ...components,
  ],
  exports: [
    ...pipes,
    ...components
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SharedModule { }