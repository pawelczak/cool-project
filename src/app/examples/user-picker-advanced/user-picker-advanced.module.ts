import { NgModule, Provider, StaticProvider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPickerAdvancedComponent } from './user-picker-advanced.component';
import { UserPickerModule } from '../../lib/user-picker/user-picker.module';
import { TrelloUsersService } from '../../platforms/trello/user-picker/trello-users.service';

@NgModule({
  imports: [
    CommonModule,
    UserPickerModule.forPlatform({
      usersService: TrelloUsersService as any
    })
  ],
  declarations: [
    UserPickerAdvancedComponent
  ]
})
export class UserPickerAdvancedModule {

}
