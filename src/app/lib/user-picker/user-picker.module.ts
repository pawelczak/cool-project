import { NgModule, ModuleWithProviders, Provider, StaticProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

import { UserPickerComponent } from './user-picker.component';
import { UsersService } from './services/users.service';

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

  static forPlatform(config?: { usersService: UsersService}): ModuleWithProviders {

    const providers: Array<Provider> = [];

    if (config && config.usersService) {
      providers.push({
        provide: UsersService,
        useClass: config.usersService
      } as any);
    }

    return {
      ngModule: UserPickerModule,
      providers: providers
    };
  }

}
