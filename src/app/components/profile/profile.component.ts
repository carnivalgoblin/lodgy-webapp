import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../models/trip";
import {Expense} from "../../models/expense";
import {jwtDecode} from "jwt-decode";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  navbarLinks = [
    { path: '/', label: 'Home' },
    { path: '/trips', label: 'Trips' },
    { path: '/expenses', label: 'Expenses' },
    { path: '/profile', label: 'Profile'}
  ];

  // @Input() trips: { path: string; label: string; }[] = [];
  // @Input() expenses: { path: string; label: string; }[] = [];

  summaries: { type: string, total: number, amount: number }[] = [
    { type: 'trips', total: 3, amount: 25},
    { type: 'expenses', total: 7, amount: 100.5},
  ];

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

  username: string = 'User';

  constructor( private authService: AuthService ) {}

  ngOnInit() {
    console.log(this.trips)
    console.log(this.expenses)
    this.getUsernameFromToken();
  }

  private getUsernameFromToken() {

    if (this.authService.isAuthenticated()) {
      this.username = localStorage.getItem('loggedUsername') as string;
      console.log('Username:', this.username);
    } else {
      console.error('JWT token not found in localStorage');
    }
  }


  getSummary() {
    //get trips summary

    //get expenses summary

    // set summary

  }

}
