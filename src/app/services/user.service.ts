import {Injectable} from '@angular/core';
import {GlobalConstants} from "../global/global-constants";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = GlobalConstants.userURL;
  private userCache: { id: number; username: string }[] = [];

  constructor(private http: HttpClient) {
  }

  getUser(id: number) {
    const url = `${this.userURL}/${id}`;
    return this.http.get(url, { withCredentials: true });
  }

  getUsernames():  Observable<{ id: number; username: string }[]> {
    const url = `${this.userURL}/all/usernames`;

    if (this.userCache.length > 0) {
      return of(this.userCache);
    }

    return this.http.get<{ id: number; username: string }[]>(url, { withCredentials: true }).pipe(
      tap((users) => {
        // Update the cache with the fetched data
        this.userCache = users;
      }),
      catchError((error) => {
        console.error('Error fetching users', error);
        return of([]);
      })
    );
  }
}
