import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsemesterComponent } from './addsemester.component';

describe('AddsemesterComponent', () => {
  let component: AddsemesterComponent;
  let fixture: ComponentFixture<AddsemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsemesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
