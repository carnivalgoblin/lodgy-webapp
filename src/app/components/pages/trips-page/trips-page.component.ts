import {Component, OnInit} from '@angular/core';
import {Trip} from "../../../models/trip";
import {GlobalConstants} from "../../../global/global-constants";
import {TripService} from "../../../services/trip.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'trips-page',
  templateUrl: './trips-page.component.html',
  styleUrl: './trips-page.component.scss'
})
export class TripsPageComponent implements OnInit{

  trips: Trip[] = [];
  currentTrip?: Trip;
  navbarLinks = GlobalConstants.navbarLinks;
  isLoading: boolean = true;

  constructor(
    private tripService: TripService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.getTripsForUser();
  }

  sortTrips() {
    this.trips = this.trips.sort((a, b) => {
      let aDate = a.startDate instanceof Date ? a.startDate : new Date(a.startDate);
      let bDate = b.startDate instanceof Date ? b.startDate : new Date(b.startDate);
      return bDate.getTime() - aDate.getTime();
    });
  }

  getTripsForUser() {
    const userId = Number(localStorage.getItem('loggedUserId'));
    this.tripService.getTripsByUserId(userId).subscribe({
      next: (trips) => {
        this.trips = trips;
        this.sortTrips();
        this.currentTrip = this.getCurrentTrip();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching trips', error);
      }
    });
  }

  getCurrentTrip(): Trip | undefined {
    const today = new Date();

    const activeTrips = this.trips.filter(trip => {
      const startDate = new Date(trip.startDate);
      const endDate = new Date(trip.endDate);
      return today >= startDate && today <= endDate;
    });

    return activeTrips.length > 0
      ? activeTrips.reduce((earliest, trip) => {
        const earliestStartDate = new Date(earliest.startDate);
        const currentStartDate = new Date(trip.startDate);
        return currentStartDate < earliestStartDate ? trip : earliest;
      })
      : undefined;
  }
}
