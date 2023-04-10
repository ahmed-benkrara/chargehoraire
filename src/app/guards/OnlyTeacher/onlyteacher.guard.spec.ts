import { TestBed } from '@angular/core/testing';

import { OnlyteacherGuard } from './onlyteacher.guard';

describe('OnlyteacherGuard', () => {
  let guard: OnlyteacherGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyteacherGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
