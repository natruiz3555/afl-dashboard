import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Tip } from './tip';

@Injectable({
  providedIn: 'root'
})
export class TipService {
  tipURL = 'https://api.squiggle.com.au/?q=tips;year=2019;source=1';

  constructor(private http: HttpClient) { }

  getTips(): Observable<Tip[]> {
    return this.http.get(this.tipURL)
      .pipe<Tip[]>(map((data: any) => data.tips));
  }
}
