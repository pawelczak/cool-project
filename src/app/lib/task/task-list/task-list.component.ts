import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

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

  ngOnInit() {
  }

  changeTask(): void {
    const task = this.tasks[1];
    this.tasks[1] = { ...task, name: 'Task #2 modified' };
  }

}
