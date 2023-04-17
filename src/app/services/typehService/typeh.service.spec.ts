import { TestBed } from '@angular/core/testing';

import { TypehService } from './typeh.service';

describe('TypehService', () => {
  let service: TypehService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypehService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
