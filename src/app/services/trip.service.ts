import {Injectable} from '@angular/core';
import {GlobalConstants} from "../global/global-constants";
import {HttpClient} from "@angular/common/http";
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

  getUserTrips(tripId: number): Observable<any[]> {
    const url = `${this.tripURL}/${tripId}/userTrips`;
    return this.http.get<any[]>(url, { withCredentials: true });
  }

  distributeCosts(tripId: number, userTripDTOs: any[], basedOnDays: boolean): Observable<any> {
    let url;

    if (basedOnDays) {
      url = `${this.tripURL}/${tripId}/distribute-costs`;
    } else {
      url = `${this.tripURL}/${tripId}/distribute-costs?basedOnDays=false`;
    }

    const payload =  userTripDTOs;
    console.log(payload);
    return this.http.post<any>(url, payload, { withCredentials: true });
  }

}
