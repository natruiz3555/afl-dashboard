import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ParentvenuesComponent } from './parentvenues/parentvenues.component';


const routes: Routes = [
  //{ path: 'parentvenues', component: ParentvenuesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
