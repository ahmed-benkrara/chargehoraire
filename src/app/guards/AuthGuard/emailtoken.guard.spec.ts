import { TestBed } from '@angular/core/testing';

import { EmailtokenGuard } from './emailtoken.guard';

describe('EmailtokenGuard', () => {
  let guard: EmailtokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmailtokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
