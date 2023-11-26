import { Component } from '@angular/core';

@Component({
  selector: 'trips-page',
  templateUrl: './trips-page.component.html',
  styleUrl: './trips-page.component.scss'
})
export class TripsPageComponent {

  navbarLinks = [
    { path: '/', label: 'Home' },
    { path: '/trips', label: 'Trips' },
    { path: '/expenses', label: 'Expenses' },
    { path: '/profile', label: 'Profile'}
  ];

}
