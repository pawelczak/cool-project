import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { abstractTaskComponent } from './task-token';
import { TaskListFeatureModule } from './task-list-feature.module';

@NgModule({})
export class TaskListModule {

  static exports = [
    TaskListComponent,
    TaskItemComponent
  ];

  static forRoot(): ModuleWithProviders {

    @NgModule({
      imports: [
        CommonModule
      ],
      declarations: [
        TaskListComponent,
        TaskItemComponent
      ],
      exports: [
        TaskListComponent
      ]
    })
    class DynamicTaskListModule {
    }

    return {
      ngModule: DynamicTaskListModule,
      providers: []
    };
  }

  static forFeature(args: any): ModuleWithProviders {

    @NgModule({
      imports: [
        CommonModule,
        TaskListFeatureModule
      ],
      declarations: [
        // ...TaskListModule.exports,
        args
      ],
      entryComponents: [
        args
      ],
      exports: [
        TaskListFeatureModule
      ]
    })
    class DynamicTaskListModule {
    }

    return {
      ngModule: DynamicTaskListModule,
      providers: [{
        provide: abstractTaskComponent,
        useValue: args
      }]
    };
  }

}
