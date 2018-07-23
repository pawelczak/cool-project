import { Routes } from '@angular/router';

import { UserPickerBasicComponent } from './examples/user-picker-basic/user-picker-basic.component';
import { UserPickerAdvancedComponent } from './examples/user-picker-advanced/user-picker-advanced.component';

export const routes: Routes = [
  { path: '', redirectTo: 'userpicker-basic', pathMatch: 'full' },
  { path: 'userpicker-basic', component: UserPickerBasicComponent },
  { path: 'userpicker-advanced', component: UserPickerAdvancedComponent },
  { path: '**', redirectTo: 'userpicker-basic', pathMatch: 'full' }
];
