import { InjectionToken } from '@angular/core';

import { AbstractTaskComponent } from './abstract-task/abstract-task.component';

export const abstractTaskComponent = new InjectionToken<AbstractTaskComponent>('ABSTRACT_TASK_COMPONENT');
