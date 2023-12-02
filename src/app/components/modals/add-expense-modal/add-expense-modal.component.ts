import {Component, Inject} from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddTripModalComponent} from "../add-trip-modal/add-trip-modal.component";

@Component({
  selector: 'add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrl: './add-expense-modal.component.scss'
})
export class AddExpenseModalComponent {
  amount?: number;
  userId?: number;
  tripId?: number;
  description?: string;

  constructor(
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<AddTripModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onAddExpense() {
    this.snackbarService.openSnackbar('Not implemented yet!');
  }

  onClose() {
    this.dialogRef.close();
  }
}
