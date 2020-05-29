import { TestBed } from '@angular/core/testing';

import { HeadServiceService } from './head-service.service';

describe('HeadServiceService', () => {
  let service: HeadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
