import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPickerBasicComponent } from './user-picker-basic.component';

describe('UserPickerBasicComponent', () => {
  let component: UserPickerBasicComponent;
  let fixture: ComponentFixture<UserPickerBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPickerBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPickerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
