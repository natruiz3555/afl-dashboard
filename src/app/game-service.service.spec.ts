import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { GameServiceService } from './game-service.service';

describe('GameServiceService', () => {
  let service: GameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
