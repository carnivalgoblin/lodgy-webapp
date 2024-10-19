import {Component, Inject} from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TripService} from "../../../services/trip.service";
import {Trip} from "../../../models/trip";

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
    private tripService: TripService,
    public dialogRef: MatDialogRef<AddTripModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onAddTrip() {
    const trip = {
      destination: this.tripDestination!,
      startDate: this.tripStartDate!,
      endDate: this.tripEndDate!,
      description: this.tripDescription
    }
    this.tripService.createTrip(trip)
      .subscribe({
        next: (response) => {
          console.log('Trip added:', response);
          this.snackbarService.openSnackbar('Trip added');
          this.dialogRef.close();
        },
        error: (error) => {
          console.error('Error adding trip', error);
          this.snackbarService.openSnackbar('Error adding trip');
        }
      });
  }

  onClose() {
    this.dialogRef.close();
  }
}
