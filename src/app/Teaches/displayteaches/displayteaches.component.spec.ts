import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayteachesComponent } from './displayteaches.component';

describe('DisplayteachesComponent', () => {
  let component: DisplayteachesComponent;
  let fixture: ComponentFixture<DisplayteachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayteachesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayteachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
