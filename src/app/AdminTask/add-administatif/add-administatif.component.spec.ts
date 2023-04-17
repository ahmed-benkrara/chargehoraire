import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdministatifComponent } from './add-administatif.component';

describe('AddAdministatifComponent', () => {
  let component: AddAdministatifComponent;
  let fixture: ComponentFixture<AddAdministatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdministatifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdministatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
