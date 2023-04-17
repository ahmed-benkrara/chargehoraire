import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysessionComponent } from './displaysession.component';

describe('DisplaysessionComponent', () => {
  let component: DisplaysessionComponent;
  let fixture: ComponentFixture<DisplaysessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaysessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaysessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
