import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteachesComponent } from './addteaches.component';

describe('AddteachesComponent', () => {
  let component: AddteachesComponent;
  let fixture: ComponentFixture<AddteachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddteachesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddteachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
