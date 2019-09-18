import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheWallComponent } from './the-wall/the-wall.component';
import { DetailsComponent } from './details/details.component';
import { PostFilterPipe } from './post-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReversePipe } from './reverse.pipe';
import { ThrottlePipe } from './throttle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TheWallComponent,
    DetailsComponent,
    PostFilterPipe,
    ReversePipe,
    ThrottlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
