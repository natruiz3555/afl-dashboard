import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentcladComponent } from './parentclad/parentclad.component';
import { ChildcladComponent } from './childclad/childclad.component';
import { CladService } from './clad.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentcladComponent,
    ChildcladComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CladService],
  bootstrap: [AppComponent]
})
export class AppModule { }
