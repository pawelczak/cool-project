import { Component } from '@angular/core';

import { AbstractTaskComponent } from '../../../lib/task/abstract-task/abstract-task.component';

@Component({
  templateUrl: './trello-task-card.component.html',
  styleUrls: ['./trello-task-card.component.css']
})
export class TrelloTaskCardComponent extends AbstractTaskComponent {

}
