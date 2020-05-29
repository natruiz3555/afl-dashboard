import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

import {Game} from './Game';
import {Team} from './Team';

@Injectable({
  providedIn: 'root'
})
export class HeadServiceService {
  pastgamesURL = 'https://api.squiggle.com.au/?q=games;year=2019';
  teamsURL = 'https://api.squiggle.com.au/?q=teams';
  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get(this.teamsURL).pipe(map((data: any) => data.teams.map((item: any) => new Team(
    item.logo,
    item.id,
    item.name,
    item.abbrev
    ))));
  }
  getGames(): Observable<Game[]> {
    return this.http.get(this.pastgamesURL).pipe(map((data: any) => data.games.map((item: any) => new Game(
        item.complete,
        item.is_grand_final,
        item.tz,
        item.hbehinds,
        item.ateam,
        item.winnerteamid,
        item.hgoals,
        item.updated,
        item.round,
        item.is_final,
        item.hscore,
        item.abehinds,
        item.winner,
        item.ascore,
        item.hteam,
        item.ateamid,
        item.venue,
        item.hteamid,
        item.agoals,
        item.year,
        item.date,
        item.id
      )))
    );
  }
}