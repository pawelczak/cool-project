import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({})
export class TaskListModule {

  static exports = [
    TaskListComponent,
    TaskItemComponent
  ];

  static forPlatform(args: any): ModuleWithProviders {

    @NgModule({
      imports: [
        CommonModule,
      ],
      declarations: [
        TaskListComponent,
        TaskItemComponent,
        args
      ],
      exports: [
        TaskListComponent
      ],
      entryComponents: [
        args
      ]
    })
    class DynamicTaskListModule {
    }

    return {
      ngModule: DynamicTaskListModule,
      providers: [{
        provide: 'task-item',
        useValue: args
      }]
    };
  }

}
