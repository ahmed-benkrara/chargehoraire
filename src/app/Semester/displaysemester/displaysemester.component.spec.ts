import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysemesterComponent } from './displaysemester.component';

describe('DisplaysemesterComponent', () => {
  let component: DisplaysemesterComponent;
  let fixture: ComponentFixture<DisplaysemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaysemesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaysemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
