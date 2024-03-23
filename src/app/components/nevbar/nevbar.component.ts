import { Component } from '@angular/core';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css'],
})
export class NevbarComponent {
  newbarLinks = [
    { linkName: 'Home', linkAddress: '/home' },
    { linkName: 'About', linkAddress: '/about' },
    { linkName: 'Services', linkAddress: '/our-services' },
    { linkName: 'Portfolio', linkAddress: '/portfolio' },
    { linkName: 'Team', linkAddress: '/team' },
    { linkName: 'Pricing', linkAddress: '/pricing' },
    { linkName: 'Contact', linkAddress: '/contact' },
  ];
}
