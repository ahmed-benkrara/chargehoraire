import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayprofessorComponent } from './displayprofessor.component';

describe('DisplayprofessorComponent', () => {
  let component: DisplayprofessorComponent;
  let fixture: ComponentFixture<DisplayprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayprofessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
