import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { Parentnext5Component } from './parentnext5/parentnext5.component';


const routes: Routes = [
  //{ path: 'parentnext5', component: Parentnext5Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }