import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtypehComponent } from './addtypeh.component';

describe('AddtypehComponent', () => {
  let component: AddtypehComponent;
  let fixture: ComponentFixture<AddtypehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtypehComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtypehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
