import {Component, Inject, OnInit} from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TripService} from "../../../services/trip.service";
import {UserService} from "../../../services/user.service";
import {ExpenseService} from "../../../services/expense.service";

@Component({
  selector: 'add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrl: './add-expense-modal.component.scss'
})
export class AddExpenseModalComponent implements OnInit{
  amount = 0;
  userId?: number;
  userName?: string;
  tripId?: number;
  description?: string;

  isAdmin: boolean = false;
  isMod: boolean = false;
  isPreselected: boolean = false;

  trips?: any[];
  selectedTrip?: number;

  constructor(
    private snackbarService: SnackbarService,
    private tripService: TripService,
    private userService: UserService,
    private expenseService: ExpenseService,
    public dialogRef: MatDialogRef<AddExpenseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {

    console.log('Data:', this.data);
    if (this.data.tripId) {
      this.selectedTrip = this.data.tripId;
      console.log('Selected Trip:', this.selectedTrip);
    }

    this.tripService.getTrips().subscribe({
      next: (trips) => {
        this.trips = trips;
      },
      error: (error) => {
        console.error('Error fetching trips', error);
      }
    });

    this.userService.getUser().subscribe({
      next: (user) => {
        this.userId = user.id;
        this.userName = user.username;
        console.log('Fetched user:', user);
      },
      error: (error) => {
        console.error('Error fetching user', error);
      }
    });

    this.isPreselected = this.data.isPreselected;
    console.log('Data:', this.trips);
    console.log('isPreselected:', this.data.isPreselected);
    if (localStorage.getItem('isAdmin') === 'true') {
      this.isAdmin = true;
    } else if (localStorage.getItem('isMod') === 'true') {
      this.isMod = true;
    }
    console.log(('isAdmin:' + this.isAdmin)
      + ('isMod:' + this.isMod));
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const formattedValue = inputValue.replace(',', '.');
    this.amount = parseFloat(formattedValue);
    console.log('Amount:', this.amount);
  }

  onAddExpense() {
    // this.snackbarService.openSnackbar('Not implemented yet!');
    console.log('Selected Trip:', this.selectedTrip);

    const expense = {
      amount: this.amount!,
      description: this.description,
      userId: this.userId!,
      tripId: this.selectedTrip!
    }

    console.log('Expense:', expense);

    this.expenseService.createExpense(expense).subscribe({
      next: (response) => {
        console.log('Expense added:', response);
        this.snackbarService.openSnackbar('Expense added');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error adding expense', error);
        this.snackbarService.openSnackbar('Error adding expense');
      }
    });

  }

  onClose() {
    this.dialogRef.close();
  }

}
