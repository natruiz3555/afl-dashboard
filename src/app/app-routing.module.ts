import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentHeadComponent } from './parent-head/parent-head.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
