import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListModule } from '../../lib/task/task-list.module';
import { JiraTaskComponent } from '../../platforms/jira/task/jira-task.component';
import { JiraTaskExampleComponent } from './jira-task-example.component';
import { AbstractTaskComponent } from '../../lib/task/abstract-task/abstract-task.component';


@NgModule({
  imports: [
    CommonModule,
    TaskListModule.forPlatform(JiraTaskComponent as any)
  ],
  declarations: [
    JiraTaskExampleComponent
  ],
})
export class JiraTaskExampleModule { }
