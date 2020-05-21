import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeaserModule } from './modules/teaser/teaser.module';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeaserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
