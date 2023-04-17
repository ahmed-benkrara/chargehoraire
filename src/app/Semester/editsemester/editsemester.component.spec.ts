import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsemesterComponent } from './editsemester.component';

describe('EditsemesterComponent', () => {
  let component: EditsemesterComponent;
  let fixture: ComponentFixture<EditsemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsemesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
