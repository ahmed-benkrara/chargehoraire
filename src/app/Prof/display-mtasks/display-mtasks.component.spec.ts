import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMTasksComponent } from './display-mtasks.component';

describe('DisplayMTasksComponent', () => {
  let component: DisplayMTasksComponent;
  let fixture: ComponentFixture<DisplayMTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
