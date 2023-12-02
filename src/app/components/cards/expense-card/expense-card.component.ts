import {Component, Input, OnInit} from '@angular/core';
import {Expense} from "../../../models/expense";
import {Router} from "@angular/router";
import {Trip} from "../../../models/trip";
import {TripService} from "../../../services/trip.service";
import {GlobalConstants} from "../../../global/global-constants";

@Component({
  selector: 'expense-card',
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.scss'
})
export class ExpenseCardComponent implements OnInit{

  @Input() expense!: Expense;
  // tripId = this.expense.tripId;
  // trip?: Trip;
  trip: Trip = GlobalConstants.singleTrip
  tripName?: string;

  constructor(
    private router: Router,
              private tripService: TripService
  ) {
  }

  ngOnInit() {
    this.tripName = this.trip.destination + " " + this.trip.startDate.getUTCFullYear();
    console.log(this.trip)
    // this.tripService.getTrip(this.tripId).subscribe(
    //   (data: Trip) => {
    //     this.trip = data;
    //     this.tripName = this.trip.destination + " " + this.trip.startDate.getUTCFullYear();
    //     console.log('Trip details fetched successfully: ' + this.tripName);
    //   },
    //   error => {
    //     console.error('Error fetching trip details', error);
    //   }
    // );
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
