import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from '../model/task';

@Injectable()
export class TasksService {

  constructor() {
  }

  getTasks(): Observable<Array<Task>> {
    return of([
      new Task('Task #1', 'admin', '01.01.1970'),
      new Task('Task #2', 'admin', '01.01.1972'),
      new Task('Task #3', 'admin', '01.01.1973')
    ]);
  }
}
