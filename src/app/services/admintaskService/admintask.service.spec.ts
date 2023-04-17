import { TestBed } from '@angular/core/testing';

import { AdmintaskService } from './admintask.service';

describe('AdmintaskService', () => {
  let service: AdmintaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmintaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
