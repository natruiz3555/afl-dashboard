import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameServiceService } from './game-service.service';
import { TipService } from './tip.service';
import { PastGamesComponent } from './past-games/past-games.component';
import { NextGamePredictionComponent } from './next-game-prediction/next-game-prediction.component';
import { HeadServiceService } from './head-service.service';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';

@NgModule({
  declarations: [
    AppComponent,
    PastGamesComponent,
    NextGamePredictionComponent,
    HeadToHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameServiceService, TipService, HttpClient, HeadServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
