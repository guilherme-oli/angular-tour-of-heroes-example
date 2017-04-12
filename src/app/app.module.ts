import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponentComponent } from './hero-detail-component/hero-detail-component.component';
import { HeroesComponentComponent } from './heroes-component/heroes-component.component';
import { HeroServiceService } from './hero-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponentComponent,
    HeroesComponentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
