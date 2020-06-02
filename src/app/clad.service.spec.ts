import { TestBed } from '@angular/core/testing';

import { CladService } from './clad.service';

describe('CladService', () => {
  let service: CladService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CladService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
