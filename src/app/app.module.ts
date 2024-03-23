import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NevbarComponent } from './components/nevbar/nevbar.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TeamComponent } from './components/team/team.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NevbarComponent,
    AboutComponent,
    PortfolioComponent,
    TeamComponent,
    PricingComponent,
    ContactComponent,
    Error404Component,
    OurServicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterLink, RouterLinkActive],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
