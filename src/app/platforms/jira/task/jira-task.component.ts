import { Component } from '@angular/core';

import { AbstractTaskComponent } from '../../../lib/task/abstract-task/abstract-task.component';
import { Task } from '../../../lib/task/model/task';

@Component({
  templateUrl: './jira-task.component.html',
  styleUrls: ['./jira-task.component.css']
})
export class JiraTaskComponent extends AbstractTaskComponent {
}
