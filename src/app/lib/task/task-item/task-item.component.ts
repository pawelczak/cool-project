import { ChangeDetectionStrategy, Component, Inject, Injector, Input, OnInit } from '@angular/core';

import { abstractTaskComponent } from '../task-token';
import { AbstractTaskComponent } from '../abstract-task/abstract-task.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {

  @Input()
  task: any;

  constructor(private injector: Injector,
              @Inject(abstractTaskComponent) private taskItemComponent: AbstractTaskComponent) {
  }

  ngOnInit() {
  }

  createInjector(task) {
    return Injector.create({ parent: this.injector, providers: [{ provide: 'task', useValue: task }] });
  }

}
