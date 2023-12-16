import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {Trip} from "../../../models/trip";
import {TripService} from "../../../services/trip.service";
import {ActivatedRoute} from "@angular/router";
import {ExpenseService} from "../../../services/expense.service";
import {Expense} from "../../../models/expense";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'distribution-page',
  templateUrl: './distribution-page.component.html',
  styleUrl: './distribution-page.component.scss'
})
export class DistributionPageComponent implements OnInit {
  distributionResult: any;
  tripId!: number;
  trip: any;
  userExpenses: {
    username: string;
    userId: number; totalExpense: number }[] = [];
  totalExpenseForUser!: number;
  userIdToFind!: number;

  constructor(
    private dataService: DataService,
    private tripService: TripService,
    private expenseService: ExpenseService,
    private userService: UserService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    // Retrieve distribution result from the service
    this.distributionResult = this.dataService.getDistributionResult();
    console.log(this.distributionResult);

    if (this.route.parent) {
      this.route.parent.params.subscribe(parentParams => {
        // Extract the 'id' parameter from the parent route (TripDetailComponent)
        this.tripId = +parentParams['id'];
        console.log('Trip ID in DistributionPageComponent:', this.tripId);
        if (this.tripId !== undefined || this.tripId !== null) {
          this.getTripWithExpenses(this.tripId);
        }
      });
    }
  }

  getTripWithExpenses(tripId: number) {
    this.tripService.getTrip(tripId).subscribe(
      (data: Trip) => {
        this.trip = data;
        console.log('Trip details fetched successfully: ', this.trip);

        // Fetch details for each expenseId
        if (this.trip && this.trip.expenseIds && this.trip.expenseIds.length > 0) {
          this.trip.expenses = [];

          // Iterate through each expenseId and fetch the corresponding expense details
          this.trip.expenseIds.forEach((expenseId: number) => {
            this.expenseService.getExpense(expenseId).subscribe(
              (expense: Expense) => {
                this.trip.expenses.push(expense);

                // Optionally, perform actions with the fetched expense details
                console.log('Expense details fetched successfully:', expense);

                this.updateUserExpenses(expense.userId, expense.amount);
                console.log('User expenses:', this.userExpenses);

                // Update totalExpenseForUser property
                this.findTotalExpenseForUser(expense.userId);

              },
              error => {
                console.error('Error fetching expense details', error);
              }
            );
          });
        }
      },
      error => {
        console.error('Error fetching trip details', error);
      }
    );
  }

  updateUserExpenses(userId: number, expenseAmount: number): void {
    const userExpenseIndex = this.userExpenses.findIndex(expense => expense.userId === userId);

    if (userExpenseIndex !== -1) {
      this.userExpenses[userExpenseIndex].totalExpense += expenseAmount;

      // Fetch username from UserService based on the userId
      this.userService.getUsername(userId).subscribe(
        (username: string) => {
          this.userExpenses[userExpenseIndex].username = username;
        },
        error => {
          console.error('Error fetching username', error);
        }
      );

      if (userId === this.userIdToFind) {
        this.totalExpenseForUser = this.userExpenses[userExpenseIndex].totalExpense;
      }
    } else {
      // Fetch username from UserService based on the userId
      this.userService.getUsername(userId).subscribe(
        (username: string) => {
          this.userExpenses.push({ userId, totalExpense: expenseAmount, username });
        },
        error => {
          console.error('Error fetching username', error);
        }
      );
    }
  }

  findTotalExpenseForUser(userIdToFind: number): void {
    const userExpense = this.userExpenses.find(expense => expense.userId === userIdToFind);

    if (userExpense) {
      this.totalExpenseForUser = userExpense.totalExpense;
      console.log(`Total expense for user ${userIdToFind}: ${this.totalExpenseForUser} €`);
    } else {
      console.log(`User with userId ${userIdToFind} not found in the array.`);
    }
  }

  totalExpenseForUserCall(userIdToFind: number): number {
    const userExpense = this.userExpenses.find(expense => expense.userId === userIdToFind);

    if (userExpense) {
      return userExpense.totalExpense;
    } else {
      console.log(`User with userId ${userIdToFind} not found in the array.`);
      return 0;
    }
  }

  getUsername(userIdToFind: number): string {
    const userExpense = this.userExpenses.find(expense => expense.userId === userIdToFind);

    if (userExpense) {
      return userExpense.username;
    } else {
      console.log(`User with userId ${userIdToFind} not found in the array.`);
      return '0';
    }
  }
}

