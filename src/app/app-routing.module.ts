import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentcladComponent } from './parentclad/parentclad.component';

const routes: Routes = [
  { path: 'currentladder', component: ParentcladComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
