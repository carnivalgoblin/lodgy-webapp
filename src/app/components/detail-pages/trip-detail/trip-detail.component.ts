import {Component, Input, OnInit} from '@angular/core';
import {GlobalConstants} from "../../../global/global-constants";
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../../../services/trip.service";
import {Trip} from "../../../models/trip";
import {ExpenseService} from "../../../services/expense.service";
import {SnackbarService} from "../../../services/snackbar.service";
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrl: './trip-detail.component.scss'
})
export class TripDetailComponent implements OnInit {

  navbarLinks = GlobalConstants.navbarLinks;
  trip: any;
  totalExpenses: number = 0;
  isParticipating: boolean = false;

  dateOptions: any = GlobalConstants.dateOptions;
  startDate!: string;
  endDate!: string;

  tripUserIds: number[] = [];
  tripExpenseIds: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private expenseService: ExpenseService,
    private snackbarService: SnackbarService,
    private modalService: ModalService
    ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const tripId = +params['id'];

      // Call the getTrip method from the TripService
      this.tripService.getTrip(tripId).subscribe(
        (data: Trip) => {
          this.trip = data;
          this.convertStartAndEndDate();
          this.tripUserIds = this.trip.userIds;
          this.tripExpenseIds = this.trip.expenseIds;

          console.log('Trip details fetched successfully: ' + this.trip.destination);

        },
        error => {
          console.error('Error fetching trip details', error);
        }
      );

      this.expenseService.getExpensesByTripId(tripId).subscribe(
        (data: any) => {
          this.totalExpenses = data.amount;
          console.log('Expenses fetched successfully: ' + data);
        },
        error => {
          console.error('Error fetching expenses', error);
        }
      );
    });
  }

  private convertToDate(dateString: string): Date | null {
      const date = new Date(dateString);

      // Check if the conversion was successful
      if (!isNaN(date.getTime())) {
        return date;
      } else {
        console.error('Invalid date format:', dateString);
        return null;
      }
    }

  private convertStartAndEndDate() {
      if (this.trip) {
        const startDateString = this.trip.startDate;
        const endDateString = this.trip.endDate;

        // Convert start date
        const startDate = this.convertToDate(startDateString);
        if (startDate !== null) {
          this.startDate = startDate.toLocaleDateString('de-DE', this.dateOptions);
        }

        // Convert end date
        const endDate = this.convertToDate(endDateString);
        if (endDate !== null) {
          this.endDate = endDate.toLocaleDateString('de-DE', this.dateOptions);
        }
      }
    }

  distributeExpenses() {
    this.snackbarService.openSnackbar('Not implemented yet');
  }

  addExpenses() {
    this.modalService.openAddExpenseModal();
  }

  participate() {
    this.isParticipating =! this.isParticipating;
    this.snackbarService.openSnackbar('Not implemented yet');
  }
}
