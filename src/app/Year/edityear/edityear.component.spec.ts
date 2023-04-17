import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdityearComponent } from './edityear.component';

describe('EdityearComponent', () => {
  let component: EdityearComponent;
  let fixture: ComponentFixture<EdityearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdityearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdityearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
