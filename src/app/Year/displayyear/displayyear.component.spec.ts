import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayyearComponent } from './displayyear.component';

describe('DisplayyearComponent', () => {
  let component: DisplayyearComponent;
  let fixture: ComponentFixture<DisplayyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
