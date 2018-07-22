import { Routes } from '@angular/router';

import { UserPickerBasicComponent } from './examples/user-picker-basic/user-picker-basic.component';

export const routes: Routes = [
  { path: '', redirectTo: 'userpicker', pathMatch: 'full' },
  { path: 'userpicker', component: UserPickerBasicComponent },
  { path: '**', redirectTo: 'userpicker', pathMatch: 'full' }
];
