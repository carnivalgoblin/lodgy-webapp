import {Component, Inject} from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddTripModalComponent} from "../add-trip-modal/add-trip-modal.component";

@Component({
  selector: 'update-expense-modal',
  templateUrl: './update-expense-modal.component.html',
  styleUrl: './update-expense-modal.component.scss'
})
export class UpdateExpenseModalComponent {
  amount?: number;
  userId?: number;
  tripId?: number;
  description?: string;

  constructor(
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<AddTripModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onUpdateExpense() {

    this.snackbarService.openSnackbar('Not implemented yet!');
  }

  onClose() {
    this.dialogRef.close();
  }
}
