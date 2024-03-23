import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TPM.client';

  footerlinks = [
    { linkName: 'Home', linkAddress: '/home' },
    { linkName: 'About', linkAddress: '/about' },
  ];
}
