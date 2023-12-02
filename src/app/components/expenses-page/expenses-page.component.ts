import {Component, OnInit} from '@angular/core';
import {Expense} from "../../models/expense";
import {GlobalConstants} from "../../global/global-constants";
import {Router} from "@angular/router";

@Component({
  selector: 'expenses-page',
  templateUrl: './expenses-page.component.html',
  styleUrl: './expenses-page.component.scss'
})
export class ExpensesPageComponent{

  navbarLinks = GlobalConstants.navbarLinks;


  expenses: Expense[] = [
    { id: 1, tripId: 1, userId: 1, description: 'Description for Expense 1', amount: 100 },
    { id: 2, tripId: 1, userId: 1, description: 'Description for Expense 2', amount: 200 },
    { id: 3, tripId: 1, userId: 1, description: 'Description for Expense 3', amount: 300 },
    { id: 4, tripId: 1, userId: 1, description: 'Description for Expense 4', amount: 400 },
    { id: 5, tripId: 1, userId: 1, description: 'Description for Expense 5', amount: 500 },
    { id: 6, tripId: 1, userId: 1, description: 'Description for Expense 6', amount: 600 },
    // Add more expenses as needed
  ];

  // navbarLinks = [
  //   { path: '/', label: 'Home' },
  //   { path: '/trips', label: 'Trips' },
  //   { path: '/expenses', label: 'Expenses' },
  //   { path: '/profile', label: 'Profile'},
  //   { path: '/landing', label: 'Landing'}
  // ];

}
