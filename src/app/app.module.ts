import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentvenuesComponent } from './parentvenues/parentvenues.component';
import { ChildvenuesComponent } from './childvenues/childvenues.component';
import { VenuesService } from './venues.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentvenuesComponent,
    ChildvenuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VenuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
