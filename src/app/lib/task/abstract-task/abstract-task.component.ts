import { Component, Inject } from '@angular/core';

export abstract class AbstractTaskComponent {

  protected constructor(@Inject('task') public task: any) {}

}
