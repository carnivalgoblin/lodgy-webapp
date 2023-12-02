import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../../models/trip";
import {GlobalConstants} from "../../../global/global-constants";

@Component({
  selector: 'trips-page',
  templateUrl: './trips-page.component.html',
  styleUrl: './trips-page.component.scss'
})
export class TripsPageComponent implements OnInit{

  // trips: Trip[] = [];

  trips: Trip[] = GlobalConstants.mockTrips;

  navbarLinks = GlobalConstants.navbarLinks;

  ngOnInit() {
    this.sortTrips()
  }

  sortTrips() {
    this.trips = this.trips.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }
}
