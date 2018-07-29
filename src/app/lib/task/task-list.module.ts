import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { abstractTaskComponent } from './task-token';
import { TaskListFeatureModule } from './task-list-feature.module';
import { AbstractTaskComponent } from './abstract-task/abstract-task.component';
import { TasksService } from './services/tasks.service';

@NgModule()
export class TaskListModule {

  static forPlatform(taskComponent: AbstractTaskComponent): ModuleWithProviders {

    @NgModule({
      imports: [
        CommonModule,
        TaskListFeatureModule
      ],
      declarations: [
        taskComponent as any
      ],
      entryComponents: [
        taskComponent as any
      ],
      exports: [
        TaskListFeatureModule
      ]
    })
    class DynamicTaskListModule {
    }

    return {
      ngModule: DynamicTaskListModule,
      providers: [
        TasksService,
        {
        provide: abstractTaskComponent,
        useValue: taskComponent
      }]
    };
  }

}
