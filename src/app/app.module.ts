import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // @angular
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // Feature
    DashboardModule,
    HeroesModule,

    // app
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
