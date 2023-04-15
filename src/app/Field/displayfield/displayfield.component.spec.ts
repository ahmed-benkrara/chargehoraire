import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfieldComponent } from './displayfield.component';

describe('DisplayfieldComponent', () => {
  let component: DisplayfieldComponent;
  let fixture: ComponentFixture<DisplayfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayfieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
