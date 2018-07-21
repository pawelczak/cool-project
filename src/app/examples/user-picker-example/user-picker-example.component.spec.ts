import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPickerExampleComponent } from './user-picker-example.component';

describe('UserPickerExampleComponent', () => {
  let component: UserPickerExampleComponent;
  let fixture: ComponentFixture<UserPickerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPickerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
