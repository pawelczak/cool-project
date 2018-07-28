import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JiraTaskComponent } from '../../../platforms/jira/task/jira-task.component';
import { JiraTaskExampleComponent } from '../jira-task-example.component';
import { TaskListModule } from '../../../lib/task/task-list.module';
import { abstractTaskComponent } from '../../../lib/task/task-token';

@NgModule({
  imports: [
    CommonModule,
    TaskListModule.forFeature(JiraTaskComponent)
  ],
  declarations: [
    JiraTaskExampleComponent,
    JiraTaskComponent as any
  ],
  entryComponents: [
    JiraTaskComponent as any
  ],
  providers: [
    {
      provide: abstractTaskComponent,
      useValue: JiraTaskComponent
    }
  ]
})
export class BasicJiraTaskExampleModule { }
