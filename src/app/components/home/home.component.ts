import { Component } from '@angular/core';
import {GlobalConstants} from "../../global/global-constants";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // trips: any[] = []; // Your array of trips
  trips: any[] = GlobalConstants.mockTrips; // Mock Data
  navbarLinks: any[] = GlobalConstants.navbarLinks;
  currentTrips: any[] = [];
  upcomingTrips: any[] = [];

  ngOnInit(): void {
    this.initializeTrips();
    console.log(new Date().toJSON());
  }

  initializeTrips(): void {
    // Assuming you have a Date object representing the current date
    const currentDate = new Date();

    // Filter trips based on the current date
    this.currentTrips = this.trips.filter((trip) => {
      const startDate = new Date(trip.startDate);
      const endDate = new Date(trip.endDate);

      // Check if the current date is on or between start and end dates
      return startDate <= currentDate && currentDate <= endDate;
    });

    // Filter trips based on the current date for upcomingTrips
    this.upcomingTrips = this.trips.filter((trip) => {
      const startDate = new Date(trip.startDate);

      // Check if the start date is after the current date
      return startDate > currentDate;
    });

  }
}
