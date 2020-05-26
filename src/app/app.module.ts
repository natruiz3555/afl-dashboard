import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastGamesService } from './past-games.service';
import { ParentgamesComponent } from './parentgames/parentgames.component';
import { ChildgamesComponent } from './childgames/childgames.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentgamesComponent,
    ChildgamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [PastGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
