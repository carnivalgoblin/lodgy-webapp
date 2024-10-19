import {Component} from '@angular/core';
import {GlobalConstants} from "../../global/global-constants";
import {TripService} from "../../services/trip.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  trips: any[] = [];
  navbarLinks: any[] = GlobalConstants.navbarLinks;
  currentTrips: any[] = [];
  upcomingTrips: any[] = [];

  constructor(
    private tripService: TripService
  ) {
  }

  ngOnInit(): void {
    // this.getTripsForUser();
    this.getAllTrips();
    console.log(new Date().toJSON());
  }

  getTripsForUser() {
    const userId = Number(localStorage.getItem('loggedUserId'));
    this.tripService.getTripsByUserId(userId).subscribe({
      next: (trips) => {
        this.trips = trips;
        this.initializeTrips();
      },
      error: (error) => {
        console.error('Error fetching trips', error);
      }
    });
  }

  getAllTrips() {
    this.tripService.getTrips().subscribe({
      next: (trips) => {
        this.trips = trips;
        this.initializeTrips();
      },
      error: (error) => {
        console.error('Error fetching trips', error);
      }
    })
  }

  initializeTrips(): void {
    const currentDate = new Date();

    this.currentTrips = this.trips.filter((trip) => {
      const startDate = new Date(trip.startDate);
      const endDate = new Date(trip.endDate);

      return startDate <= currentDate && currentDate <= endDate;
    });

    this.upcomingTrips = this.trips.filter((trip) => {
      const startDate = new Date(trip.startDate);

      return startDate > currentDate;
    });

  }
}
