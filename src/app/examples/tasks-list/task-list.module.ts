import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TrelloTaskCardComponent } from './trello-task-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TaskListComponent,
    TrelloTaskCardComponent
  ],
  entryComponents: [
    TrelloTaskCardComponent
  ]
})
export class TaskListModule { }
