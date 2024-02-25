import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from "../../../global/global-constants";
import {ActivatedRoute, Router} from "@angular/router";
import {TripService} from "../../../services/trip.service";
import {Trip} from "../../../models/trip";
import {ExpenseService} from "../../../services/expense.service";
import {SnackbarService} from "../../../services/snackbar.service";
import {ModalService} from "../../../services/modal.service";
import {MatDialog} from "@angular/material/dialog";
import {forkJoin} from "rxjs";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrl: './trip-detail.component.scss'
})
export class TripDetailComponent implements OnInit {

  navbarLinks = GlobalConstants.navbarLinks;
  trip: any;
  trips: any[] = [];
  // trips: any[] = GlobalConstants.mockTrips;
  totalExpenses: number = 0;
  isParticipating: boolean = false;

  dateOptions: any = GlobalConstants.dateOptions;
  startDate!: string;
  endDate!: string;

  isAdmin: boolean = false;
  isMod: boolean = false;
  isPreselected: boolean = true;

  tripUserIds: number[] = [];
  tripExpenseIds: number[] = [];
  userTripDTOs: any[] = [];
  basedOnDays: boolean = true;

  tripId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripService,
    private expenseService: ExpenseService,
    private snackbarService: SnackbarService,
    private modalService: ModalService,
    private dataService: DataService,
    public dialog: MatDialog
    ) {
  }

  ngOnInit() {
    if (localStorage.getItem('isAdmin') === 'true') {
      this.isAdmin = true;
    } else if (localStorage.getItem('isMod') === 'true') {
      this.isMod = true;
    }

    this.tripService.getTrips().subscribe({
      next: (trips) => {
        this.trips = trips;
      },
      error: (error) => {
        console.error('Error fetching trips', error);
      }
    });

    this.route.params.subscribe(params => {
      const tripId = +params['id'];
      this.tripId = tripId;
      console.log('Trip ID:', tripId);

      // Call the getTrip method from the TripService
      this.tripService.getTrip(tripId).subscribe({
        next: (data: Trip) => {
          this.trip = data;
          this.startDate = this.trip.startDate;
          this.endDate = this.trip.endDate;
          this.tripUserIds = this.trip.userIds;
          this.tripExpenseIds = this.trip.expenseIds;

          console.log('Trip details fetched successfully: ' + this.trip.destination);
        },
        error: (error) => {
          console.error('Error fetching trip details', error);
        }
      });

      this.expenseService.getExpensesByTripId(tripId).subscribe({
        next: (data: any) => {
          this.totalExpenses = data.amount;
          console.log('Expenses fetched successfully: ' + data);
        },
        error: (error) => {
          console.error('Error fetching expenses', error);
        }
      });
    });

  this.tripService.getUserTrips(this.tripId).subscribe(
    (data: any) => {
      this.userTripDTOs = data;
      console.log('User trips fetched successfully: ' + data);
    });
  }

  distributeExpenses() {
    const tripId = this.tripId;

    // Fetch user trips for the trip and distribute costs after both requests complete
    forkJoin([
      this.tripService.getUserTrips(tripId),
      this.tripService.distributeCosts(tripId, this.userTripDTOs, this.basedOnDays)
    ]).subscribe({
      next: ([userTrips, distributionResult]) => {
        console.log('User Trips:', userTrips);

        // Construct userTripDTOs using userTrips data
        this.userTripDTOs = userTrips.map(userTrip => ({
          id: userTrip.id,
          userId: userTrip.userId,
          username: userTrip.username,
          tripId: userTrip.tripId,
          owedAmount: userTrip.owedAmount,
          days: userTrip.days || 0
        }));

        console.log('Owed amounts:', distributionResult);

        this.dataService.setDistributionResult(distributionResult);

        this.router.navigate([`/trip/${tripId}/distribute`, { tripId: tripId }]);
      },
      error: (error) => {
        console.error('Failed to fetch user trips or distribute costs', error);
      }
    });
  }

  addExpenses() {
    this.modalService.openAddExpenseModal(this.isAdmin, this.isMod, this.isPreselected, this.tripId);
    console.log(this.tripId);
    //admin, mod, preselected
    this.snackbarService.openSnackbar('Not implemented yet');
  }

  participate() {
    this.isParticipating =! this.isParticipating;
    this.snackbarService.openSnackbar('Not implemented yet');
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

}
