import { Routes } from '@angular/router';

import { UserPickerExampleComponent } from './examples/user-picker-example/user-picker-example.component';

export const routes: Routes = [
  { path: '', redirectTo: 'userpicker', pathMatch: 'full' },
  { path: 'userpicker', component: UserPickerExampleComponent },
  { path: '**', redirectTo: 'userpicker', pathMatch: 'full' }
];
