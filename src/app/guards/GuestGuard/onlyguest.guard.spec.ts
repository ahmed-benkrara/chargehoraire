import { TestBed } from '@angular/core/testing';

import { OnlyguestGuard } from './onlyguest.guard';

describe('OnlyguestGuard', () => {
  let guard: OnlyguestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyguestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
