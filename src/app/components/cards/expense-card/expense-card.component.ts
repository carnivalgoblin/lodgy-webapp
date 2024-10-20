import {Component, Input, OnInit} from '@angular/core';
import {Expense} from "../../../models/expense";
import {Router} from "@angular/router";
import {Trip} from "../../../models/trip";
import {TripService} from "../../../services/trip.service";

@Component({
  selector: 'expense-card',
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.scss'
})
export class ExpenseCardComponent implements OnInit{

  @Input() expense!: Expense;

  trip?: Trip;
  // trip: Trip = GlobalConstants.singleTrip
  tripName?: string;

  constructor(
    private router: Router,
    private tripService: TripService
  ) {
  }

  ngOnInit() {
    let tripId;
    if (this.expense.tripId) {
      tripId = this.expense.tripId;
      this.tripService.getTrip(tripId).subscribe(
        (data: Trip) => {
          this.trip = data;
          this.tripName = this.trip.destination + " - " + new Date(this.trip.startDate).getFullYear();
          // console.log('Trip details fetched successfully: ' + this.tripName);
        },
        error => {
          // console.error('Error fetching trip details', error);
        }
      );

      this.tripName = this.trip?.destination + " " + this.trip?.startDate.getUTCFullYear();
      // console.log(this.trip)

    }
  }

  openExpenseDetail(expenseId: number) {
    const navigationExtras = {
      state: {
        expenseId: expenseId
      }
    };
    this.router.navigate(['/expense', expenseId], navigationExtras);
  }

}
