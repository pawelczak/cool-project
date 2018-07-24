import { Component, Injector, OnInit } from '@angular/core';

import { TrelloTaskCardComponent } from '../trello-task-card.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskCardComponent = TrelloTaskCardComponent;

  tasks = [{
    name: 'Task #1',
    assignee: 'admin',
    startDate: '01.01.1970'
  }, {
    name: 'Task #2',
    assignee: 'admin',
    startDate: '01.01.1972'
  }, {
    name: 'Task #3',
    assignee: 'admin',
    startDate: '01.01.1973'
  }];

  constructor(private injector: Injector) {
  }

  ngOnInit() {
  }

  createInjector(task) {
    return Injector.create({ parent: this.injector, providers: [{ provide: 'task', useValue: task }] });
  }

  changeTask(): void {
    // const task = this.tasks[1];
    // this.tasks[1] = { ...task, name: 'Task #2 modified' };

    this.tasks[0].name = 'asd';
  }

}
