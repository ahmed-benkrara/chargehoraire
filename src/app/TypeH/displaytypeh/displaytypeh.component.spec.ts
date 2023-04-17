import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytypehComponent } from './displaytypeh.component';

describe('DisplaytypehComponent', () => {
  let component: DisplaytypehComponent;
  let fixture: ComponentFixture<DisplaytypehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaytypehComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaytypehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
