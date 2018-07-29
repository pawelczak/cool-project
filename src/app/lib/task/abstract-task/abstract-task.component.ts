import { Inject } from '@angular/core';

import { Task } from '../model/task';

export abstract class AbstractTaskComponent {

  protected constructor(@Inject('task') public task: Task) {}

}
