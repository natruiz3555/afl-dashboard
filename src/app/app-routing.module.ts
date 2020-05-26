import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentgamesComponent } from './parentgames/parentgames.component';


const routes: Routes = [
  { path: 'parentgames', component: ParentgamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
