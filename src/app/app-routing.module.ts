import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheWallComponent } from './the-wall/the-wall.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: "", component: TheWallComponent },
  {path: "post/:postId", component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
