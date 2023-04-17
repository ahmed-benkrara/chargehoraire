import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofessorComponent } from './editprofessor.component';

describe('EditprofessorComponent', () => {
  let component: EditprofessorComponent;
  let fixture: ComponentFixture<EditprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
