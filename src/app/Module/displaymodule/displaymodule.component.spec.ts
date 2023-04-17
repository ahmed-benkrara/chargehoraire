import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymoduleComponent } from './displaymodule.component';

describe('DisplaymoduleComponent', () => {
  let component: DisplaymoduleComponent;
  let fixture: ComponentFixture<DisplaymoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaymoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaymoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
