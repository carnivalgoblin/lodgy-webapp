import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../../models/trip";
import {GlobalConstants} from "../../../global/global-constants";
import {Router} from "@angular/router";

@Component({
  selector: 'trip-card',
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.scss'
})
export class TripCardComponent implements OnInit{

  @Input() trip!: Trip;

  dateOptions: any = GlobalConstants.dateOptions;

  formattedStartDate!: string;
  formattedEndDate!: string;

  ngOnInit() {

    if (this.trip && this.trip.startDate && this.trip.endDate) {
      // Check if the startDate includes the letter 'T'
      const startDateString = this.trip.startDate.toString();
      const isFullDateFormat = startDateString.includes('T');

      // Convert dates accordingly
      this.formattedStartDate = isFullDateFormat
        ? new Date(startDateString).toLocaleDateString('de-DE', this.dateOptions)
        : startDateString;

      const endDateString = this.trip.endDate.toString();
      this.formattedEndDate = isFullDateFormat
        ? new Date(endDateString).toLocaleDateString('de-DE', this.dateOptions)
        : endDateString;
    }
  }

  constructor(private router: Router) {
  }

  openTripDetail(tripId: number) {
    const navigationExtras = {
      state: {
        tripId: tripId,
        startDate: this.formattedStartDate,
        endDate: this.formattedEndDate
      }
    };
    this.router.navigate(['/trip', tripId], navigationExtras);
  }

}
