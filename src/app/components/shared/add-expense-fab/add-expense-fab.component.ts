import {Component, OnInit} from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {ModalService} from "../../../services/modal.service";
import {TripService} from "../../../services/trip.service";

@Component({
  selector: 'add-expense-fab',
  templateUrl: './add-expense-fab.component.html',
  styleUrl: './add-expense-fab.component.scss'
})
export class AddExpenseFabComponent implements OnInit{

  isAdmin: boolean = false;
  isMod: boolean = false;
  isPreselected: boolean = false;

  trips: any[] = [];

  constructor(
    private snackbarService: SnackbarService,
    private modalService: ModalService,
    private tripService: TripService
  ) {}

  ngOnInit() {
    this.getTripsForUser();
    if (localStorage.getItem('isAdmin') === 'true') {
      this.isAdmin = true;
    } else if (localStorage.getItem('isMod') === 'true') {
      this.isMod = true;
    }
  }

  handleAddExpenseClick(): void {
    this.modalService.openAddExpenseModal(this.isAdmin, this.isMod, this.isPreselected);
    console.log('Add Expense clicked!');
    this.snackbarService.openSnackbar('Add Expense clicked!');
  }

  getTripsForUser() {
    const userId = Number(localStorage.getItem('loggedUserId'));
    this.tripService.getTripsByUserId(userId).subscribe({
      next: (trips) => {
        this.trips = trips;
      },
      error: (error) => {
        console.error('Error fetching trips', error);
      }
    });
  }

}
