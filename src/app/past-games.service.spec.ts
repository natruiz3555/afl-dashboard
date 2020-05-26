import { TestBed } from '@angular/core/testing';

import { PastGamesService } from './past-games.service';

describe('PastGamesService', () => {
  let service: PastGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
