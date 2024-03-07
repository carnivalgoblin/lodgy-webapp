import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {Trip} from "../../../models/trip";
import {TripService} from "../../../services/trip.service";
import {ActivatedRoute} from "@angular/router";
import {ExpenseService} from "../../../services/expense.service";
import {Expense} from "../../../models/expense";
import {DistributionResultElement} from "../../../models/distribution-result-element";

@Component({
  selector: 'distribution-page',
  templateUrl: './distribution-page.component.html',
  styleUrl: './distribution-page.component.scss'
})
export class DistributionPageComponent implements OnInit {
  distributionResult!: DistributionResultElement[];
  tripId!: number;
  trip: any;
  userExpenses: { userId: number; totalExpense: number }[] = [];
  userNames: { userId: number; userName: string }[] = [];
  totalExpenseForUser!: number;
  userIdToFind!: number;
  showPDF = false;

  constructor(
    private dataService: DataService,
    private tripService: TripService,
    private expenseService: ExpenseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // Retrieve distribution result from the service
    this.distributionResult = this.dataService.getDistributionResult();
    console.log(this.distributionResult);

    // this.userService.getUsernames().subscribe(
    //   (data: any) => {
    //     this.userNames = data;
    //     console.log('User names fetched successfully:', this.userNames);
    //
    //     // Log the state of this.distributionResult
    //     console.log('Distribution Result before enhancement:', this.distributionResult);
    //
    //     // Ensure this.distributionResult is an array before using forEach
    //     if (this.distributionResult && Array.isArray(this.distributionResult)) {
    //       this.distributionResult.forEach((element: DistributionResultElement) => {
    //         element.username = this.getUsername(element.userId);
    //       });
    //     } else {
    //       console.error('Distribution Result is not an array or is undefined.');
    //     }
    //
    //     console.log('Distribution Result after enhancement:', this.distributionResult);
    //   },
    //   error => {
    //     console.error('Error fetching user names', error);
    //   }
    // );


    if (this.route.parent) {
      this.route.parent.params.subscribe(parentParams => {
        // Extract the 'id' parameter from the parent route (TripDetailComponent)
        this.tripId = +parentParams['id'];
        console.log('Trip ID in DistributionPageComponent:', this.tripId);
        if (this.tripId !== undefined || this.tripId) {
          this.getTripWithExpenses(this.tripId);
        }
      });
    }

    // this.distributionResult.forEach((element: DistributionResultElement) => {
    //   element.username = this.getUsername(element.userId);
    // });

    console.log('Distribution result:', this.distributionResult);

    console.log('User expenses:', this.userExpenses);
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

  updateUserExpenses(userId: number, expenseAmount: number) {
    const userExpenseIndex = this.userExpenses.findIndex(expense => expense.userId === userId);

    if (userExpenseIndex !== -1) {
      this.userExpenses[userExpenseIndex].totalExpense += expenseAmount;

      if (userId === this.userIdToFind) {
        this.totalExpenseForUser = this.userExpenses[userExpenseIndex].totalExpense;
      }
    } else {
      this.userExpenses.push({ userId, totalExpense: expenseAmount });
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

  togglePDF() {
    this.showPDF = !this.showPDF;
  }

  // getUsername(userId: number): string {
  //   const user = this.userNames.find(user => user.userId === userId);
  //   console.log('User:', user);
  //   return user ? user.userName : '';
  // }
}

