import { TestBed } from '@angular/core/testing';

import { Next5Service } from './next5.service';

describe('Next5Service', () => {
  let service: Next5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Next5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
