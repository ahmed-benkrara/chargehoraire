import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdministatifComponent } from './display-administatif.component';

describe('DisplayAdministatifComponent', () => {
  let component: DisplayAdministatifComponent;
  let fixture: ComponentFixture<DisplayAdministatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAdministatifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAdministatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
