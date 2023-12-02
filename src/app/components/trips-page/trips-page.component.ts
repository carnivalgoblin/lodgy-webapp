import {Component, Input} from '@angular/core';
import {Trip} from "../../models/trip";
import {GlobalConstants} from "../../global/global-constants";

@Component({
  selector: 'trips-page',
  templateUrl: './trips-page.component.html',
  styleUrl: './trips-page.component.scss'
})
export class TripsPageComponent {

  trips: Trip[] = [
    { id: 1, destination: 'Trip 1', description: 'Description for Trip 1', endDate: new Date(), startDate: new Date() },
    { id: 2, destination: 'Trip 2', description: 'Description for Trip 2', endDate: new Date(), startDate: new Date() },
    { id: 3, destination: 'Trip 3', description: 'Description for Trip 3', endDate: new Date(), startDate: new Date() },
    { id: 4, destination: 'Trip 4', description: 'Description for Trip 4', endDate: new Date(), startDate: new Date() },
    { id: 5, destination: 'Trip 5', description: 'Description for Trip 5', endDate: new Date(), startDate: new Date() },
    { id: 6, destination: 'Trip 6', description: 'Description for Trip 6', endDate: new Date(), startDate: new Date() },
    // Add more trips as needed
  ];

  navbarLinks = GlobalConstants.navbarLinks;

}
