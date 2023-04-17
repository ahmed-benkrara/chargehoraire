import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditteachesComponent } from './editteaches.component';

describe('EditteachesComponent', () => {
  let component: EditteachesComponent;
  let fixture: ComponentFixture<EditteachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditteachesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditteachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
