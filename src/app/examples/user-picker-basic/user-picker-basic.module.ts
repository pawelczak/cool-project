import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';

import { UserPickerBasicComponent } from './user-picker-basic.component';
import { JiraUserPickerComponent } from './jira-user-picker/jira-user-picker.component';
import { TrelloUserPickerComponent } from './trello-user-picker/trello-user-picker.component';
import { UserPickerModule } from '../../lib/user-picker/user-picker.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    UserPickerModule
  ],
  declarations: [
    UserPickerBasicComponent,
    JiraUserPickerComponent,
    TrelloUserPickerComponent
  ],
  exports: [
    UserPickerBasicComponent
  ]
})
export class UserPickerBasicModule { }
