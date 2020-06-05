import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameServiceService } from './game-service.service';
import { TipService } from './tip.service';
import { PastGamesComponent } from './past-games/past-games.component';
import { NextGamePredictionComponent } from './next-game-prediction/next-game-prediction.component';
import { PreviousPremiershipWinnersComponent } from './previous-premiership-winners/previous-premiership-winners.component';

@NgModule({
  declarations: [
    AppComponent,
    PastGamesComponent,
    NextGamePredictionComponent,
    PreviousPremiershipWinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameServiceService, TipService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
