import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheWallComponent } from './the-wall/the-wall.component';

const routes: Routes = [
  {path: "", component: TheWallComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
