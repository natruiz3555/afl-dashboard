import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parentnext5Component } from './parentnext5/parentnext5.component';
import { Childnext5Component } from './childnext5/childnext5.component';
import { Next5Service } from './next5.service'

@NgModule({
  declarations: [
    AppComponent,
    Parentnext5Component,
    Childnext5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Next5Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
