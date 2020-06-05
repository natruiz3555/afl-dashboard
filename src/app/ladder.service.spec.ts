import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LadderService } from './ladder.service';

describe('LadderService', () => {
  let service: LadderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(LadderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
