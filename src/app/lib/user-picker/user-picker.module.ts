import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

import { UserPickerComponent } from './user-picker.component';
import { UsersService } from './services/users.service';
import { TrelloUsersService } from '../../platforms/trello/user-picker/trello-users.service';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule
  ],
  declarations: [
    UserPickerComponent
  ],
  exports: [
    UserPickerComponent
  ]
})
export class UserPickerModule {

  static forPlatform(): ModuleWithProviders {

    return {
      ngModule: UserPickerModule,
      providers: [
        // { provide: UsersService, useClass: TrelloUsersService }
      ]
    };
  }

}
