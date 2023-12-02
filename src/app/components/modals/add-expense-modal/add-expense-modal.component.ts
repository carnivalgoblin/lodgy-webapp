import {Component, Inject, Input, OnInit} from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddTripModalComponent} from "../add-trip-modal/add-trip-modal.component";

@Component({
  selector: 'add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrl: './add-expense-modal.component.scss'
})
export class AddExpenseModalComponent implements OnInit{
  amount?: number;
  userId?: number;
  tripId?: number;
  description?: string;

  isAdmin: boolean = false;
  isMod: boolean = false;
  isPreselected: boolean = false;

  trips?: any[];
  selectedTrip: any;

  constructor(
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<AddExpenseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.trips = this.data.trips;
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

  onAddExpense() {
    this.snackbarService.openSnackbar('Not implemented yet!');
    console.log('Selected Trip:', this.selectedTrip);
  }

  onClose() {
    this.dialogRef.close();
  }
}
