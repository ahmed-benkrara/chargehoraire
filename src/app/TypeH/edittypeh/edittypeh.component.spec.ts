import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittypehComponent } from './edittypeh.component';

describe('EdittypehComponent', () => {
  let component: EdittypehComponent;
  let fixture: ComponentFixture<EdittypehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittypehComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittypehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
