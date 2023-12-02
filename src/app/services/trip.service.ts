import { Injectable } from '@angular/core';
import {GlobalConstants} from "../global/global-constants";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Trip} from "../models/trip";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  apiURL: string = GlobalConstants.apiURL;
  tripURL: string = GlobalConstants.tripURL;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getTrips(): Observable<Trip[]> {
    const url = `${this.tripURL}/`;
    return this.http.get<Trip[]>(url, { withCredentials: true });
  }

  getTrip(tripId: number): Observable<Trip> {
    const url = `${this.tripURL}/${tripId}`;
    return this.http.get<Trip>(url, { withCredentials: true });
  }

}
