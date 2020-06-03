import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Ladder } from './ladder';

@Injectable({
  providedIn: 'root'
})
export class LadderService {
  currentLadderUrl = 'https://api.squiggle.com.au/?q=standings';
  predictedLadderUrl = 'https://api.squiggle.com.au/?q=ladder;source=1';

  constructor(private http: HttpClient) { }

  getLadder(year: number): Observable<Ladder> {
    return this.http.get(`${this.currentLadderUrl};year=${year}`).pipe(map((result: any) => {
      const teamIds = result.standings.map(standing => standing.id);
      return new Ladder(teamIds, year);
    }));
  }
}
