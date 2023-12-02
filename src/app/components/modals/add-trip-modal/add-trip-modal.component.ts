import {Component, Inject} from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'add-trip-modal',
  templateUrl: './add-trip-modal.component.html',
  styleUrl: './add-trip-modal.component.scss',
})
export class AddTripModalComponent {

  tripDestination?: string;
  tripStartDate?: Date;
  tripEndDate?: Date;
  tripDescription?: string;

  constructor(
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<AddTripModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onAddTrip() {
    this.snackbarService.openSnackbar('Not implemented yet!');
  }

  onClose() {
    this.dialogRef.close();
  }
}
