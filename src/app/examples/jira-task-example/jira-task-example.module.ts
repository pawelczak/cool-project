import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListModule } from '../../lib/task/task-list.module';
import { JiraTaskComponent } from '../../platforms/jira/task/jira-task.component';
import { JiraTaskExampleComponent } from './jira-task-example.component';


@NgModule({
  imports: [
    CommonModule,
    TaskListModule.forFeature(JiraTaskComponent)
  ],
  declarations: [
    JiraTaskExampleComponent
  ],
})
export class JiraTaskExampleModule { }
