import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksExampleComponent } from './tasks-example.component';

describe('TasksExampleComponent', () => {
  let component: TasksExampleComponent;
  let fixture: ComponentFixture<TasksExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
