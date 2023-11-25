import {Component, Input} from '@angular/core';
import {Trip} from "../../models/trip";
import {Expense} from "../../models/expense";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  navbarLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/profile', label: 'Profile'}
  ];

  // @Input() trips: { path: string; label: string; }[] = [];
  // @Input() expenses: { path: string; label: string; }[] = [];

  trips: Trip[] = [
    { id: 1, name: 'Trip 1', description: 'Description for Trip 1', endDate: new Date(), startDate: new Date() },
    { id: 2, name: 'Trip 2', description: 'Description for Trip 2', endDate: new Date(), startDate: new Date() },
    { id: 3, name: 'Trip 3', description: 'Description for Trip 3', endDate: new Date(), startDate: new Date() },
    // Add more trips as needed
  ];

  expenses: Expense[] = [
    { id: 1, tripId: 1, name: 'Expense 1', description: 'Description for Expense 1', amount: 100 },
    { id: 2, tripId: 1, name: 'Expense 2', description: 'Description for Expense 2', amount: 200 },
    { id: 3, tripId: 1, name: 'Expense 3', description: 'Description for Expense 3', amount: 300 },
    // Add more expenses as needed
  ];
}
