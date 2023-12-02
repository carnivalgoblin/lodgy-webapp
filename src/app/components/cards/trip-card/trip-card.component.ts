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
      this.formattedStartDate = this.trip.startDate.toLocaleDateString('de-DE', this.dateOptions);
      this.formattedEndDate = this.trip.endDate.toLocaleDateString('de-DE', this.dateOptions);
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
