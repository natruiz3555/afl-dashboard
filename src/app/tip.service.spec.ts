import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TipService } from './tip.service';

describe('TipService', () => {
  let service: TipService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(TipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
