import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TeamComponent } from './components/team/team.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'TPM-Home' },
  { path: 'home', component: HomeComponent, title: 'TPM-Home' },
  { path: 'about', component: AboutComponent, title: 'TPM-About' },
  { path: 'services', component: OurServicesComponent, title: 'TPM-Services' },
  { path: 'portfolio', component: PortfolioComponent, title: 'TPM-Portfolio' },
  { path: 'team', component: TeamComponent, title: 'TPM-Team' },
  { path: 'pricing', component: PricingComponent, title: 'TPM-Pricing' },
  { path: 'conatct', component: ContactComponent, title: 'TPM-Contact' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component, title: 'TPM-Error404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
