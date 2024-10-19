import {Component, isDevMode, OnInit} from '@angular/core';
import {Trip} from "../../models/trip";
import {Expense} from "../../models/expense";
import {AuthService} from "../../services/auth.service";
import {GlobalConstants} from "../../global/global-constants";
import {TripService} from "../../services/trip.service";
import {ExpenseService} from "../../services/expense.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  navbarLinks = GlobalConstants.navbarLinks;

  // @Input() trips: { path: string; label: string; }[] = [];
  // @Input() expenses: { path: string; label: string; }[] = [];

  summaries: { type: string, total: number, amount: number }[] = [
    { type: 'trips', total: 3, amount: 25},
    { type: 'expenses', total: 7, amount: 100.5},
  ];

  trips: Trip[] = [];

  expenses: Expense[] = [];

  username: string = 'User';

  constructor(
    private authService: AuthService,
    private tripService: TripService,
    private expenseService: ExpenseService
  ) {}

  ngOnInit() {
    this.getTripsForUser();
    this.getExpenses();

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

  get sortedAndSlicedTrips() {
    const sortedTrips = this.trips.sort((a, b) => b.id! - a.id!);

    return sortedTrips.slice(0, 2);

  }

  get sortedAndSlicedExpenses() {
    const sortedExpenses = this.expenses.sort((a, b) => b.id! - a.id!);

    return sortedExpenses.slice(0, 2);

  }

  getTripsForUser() {
    const userId = Number(localStorage.getItem('loggedUserId'));
    this.tripService.getTripsByUserId(userId).subscribe({
      next: (trips) => {
        this.trips = trips;
      },
      error: (error) => {
        console.error('Error fetching trips', error);
      }
    });
  }

  getExpenses() {
    const userId = Number(localStorage.getItem('loggedUserId'));
    console.log('Getting expenses for user with id:', userId);
    this.expenseService.getExpensesByUserId(userId).subscribe((result) => {
      this.expenses = result;
    });
  }

  getSummary() {
    //get trips summary

    //get expenses summary

    // set summary

  }

  protected readonly isDevMode = isDevMode;
}
