import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheWallComponent } from './the-wall/the-wall.component';
import { DetailsComponent } from './details/details.component';
import { PostFilterPipe } from './post-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TheWallComponent,
    DetailsComponent,
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
