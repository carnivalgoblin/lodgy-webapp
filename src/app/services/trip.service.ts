import {Injectable} from '@angular/core';
import {GlobalConstants} from "../global/global-constants";
import { HttpClient, HttpParams } from "@angular/common/http";
import {Trip} from "../models/trip";
import {Observable, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  apiURL: string = GlobalConstants.apiURL;
  tripURL: string = GlobalConstants.tripURL;
  private trips$!: Observable<Trip[]>;

  constructor(
    private http: HttpClient
  ) {
    this.fetchTrips();
  }


  private fetchTrips(): void {
    const url = `${this.tripURL}/all`;
    this.trips$ = this.http.get<Trip[]>(url, { withCredentials: true }).pipe(
      shareReplay(1)
    );
  }

  getTrips(): Observable<Trip[]> {
    return this.trips$;
  }

  getTripsByUserId(userId: number): Observable<Trip[]> {
    const url = `${this.tripURL}/user/${userId}`;
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

  joinTrip(tripId: number, userId: number, days: number): Observable<any> {
    const url = `${this.tripURL}/${tripId}/users/${userId}`;
    const params = new HttpParams().set('days', days);
    return this.http.post<any>(url, null, { params, withCredentials: true });
  }

  leaveTrip(tripId: number, userId: number): Observable<any> {
    const url = `${this.tripURL}/${tripId}/users/${userId}`;
    return this.http.delete<any>(url, { withCredentials: true });
  }

  createTrip(trip: Trip) {
    const url =`${this.tripURL}/create`;
    return this.http.post<Trip>(url, trip, { withCredentials: true })
  }

}
