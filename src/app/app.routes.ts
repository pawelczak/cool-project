import { Routes } from '@angular/router';

import { UserPickerBasicComponent } from './examples/user-picker-basic/user-picker-basic.component';
import { UserPickerAdvancedComponent } from './examples/user-picker-advanced/user-picker-advanced.component';
import { TaskListComponent } from './examples/tasks-list/task-list/task-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'userpicker-basic', pathMatch: 'full' },
  { path: 'userpicker-basic', component: UserPickerBasicComponent },
  { path: 'userpicker-advanced', component: UserPickerAdvancedComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: '**', redirectTo: 'userpicker-basic', pathMatch: 'full' }
];
