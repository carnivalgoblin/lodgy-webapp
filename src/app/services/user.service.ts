import {Injectable} from '@angular/core';
import {GlobalConstants} from "../global/global-constants";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, shareReplay, tap} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = GlobalConstants.userURL;
  private userCache$: { id: number; username: string }[] = [];
  private user$!: Observable<any>;

  constructor(private http: HttpClient) {
    this.fetchUser(Number(localStorage.getItem('loggedUserId')));
  }

  private fetchUser(userId: number): void {
    const url = `${this.userURL}/${userId}`;
    this.user$ = this.http.get(url, { withCredentials: true }).pipe(
      shareReplay(1)
    );
  }

  getUser() {
    return this.user$;
  }

  getAllUsers(): Observable<User[]> {
    const url = `${this.userURL}/all`;
    return this.http.get<User[]>(url, { withCredentials: true })
  }

  getUsernames():  Observable<{ id: number; username: string }[]> {
    const url = `${this.userURL}/all/usernames`;

    if (this.userCache$.length > 0) {
      return of(this.userCache$);
    }

    return this.http.get<{ id: number; username: string }[]>(url, { withCredentials: true }).pipe(
      tap((users) => {
        // Update the cache with the fetched data
        this.userCache$ = users;
      }),
      catchError((error) => {
        console.error('Error fetching users', error);
        return of([]);
      })
    );
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.userURL}/update`;
    return this.http.put<User>(url, user, { withCredentials: true });
  }
}
