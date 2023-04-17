import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdministatifComponent } from './edit-administatif.component';

describe('EditAdministatifComponent', () => {
  let component: EditAdministatifComponent;
  let fixture: ComponentFixture<EditAdministatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdministatifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdministatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
