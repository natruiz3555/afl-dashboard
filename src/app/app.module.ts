import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentHeadComponent } from './parent-head/parent-head.component';
import { ChildHeadComponent } from './child-head/child-head.component';
import { HeadServiceService } from './head-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentHeadComponent,
    ChildHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HeadServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
