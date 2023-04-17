import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddyearComponent } from './addyear.component';

describe('AddyearComponent', () => {
  let component: AddyearComponent;
  let fixture: ComponentFixture<AddyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
