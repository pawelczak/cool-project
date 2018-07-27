import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrelloTaskExampleComponent } from './trello-task-example.component';

import { TaskListModule } from '../../lib/task/task-list.module';

import { TrelloTaskCardComponent } from '../../platforms/trello/task-card/trello-task-card.component';

@NgModule({
  imports: [
    CommonModule,
    TaskListModule.forFeature(TrelloTaskCardComponent)
  ],
  declarations: [
    TrelloTaskExampleComponent
  ],
})
export class TrelloTaskExampleModule { }
