import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

import { Ladder } from './Ladder';

@Injectable({
  providedIn: 'root'
})
export class CladService {
  cladderURL = "https://api.squiggle.com.au/?q=standings";

  constructor(private http: HttpClient) { }

  getCLadder(): Observable<Ladder[]> {
    return this.http.get(this.cladderURL).pipe(map((data: any) => data.clads.map((item: any) => new Ladder(
      item.behinds_against,
      item.percentage,
      item.goals_against,
      item.losses,
      item.rank,
      item.goals_for,
      item.played,
      item.id,
      item.pts,
      item.wins,
      item.name,
      item.behinds_for,
      item.draws,
      item.forr,
      item.against
    ))));
  }
}
