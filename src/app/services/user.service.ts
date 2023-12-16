import {Injectable} from '@angular/core';
import {GlobalConstants} from "../global/global-constants";
import {AuthService} from "./auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = GlobalConstants.userURL;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getUser(id: number) {
    const url = `${this.userURL}/${id}`;
    return this.http.get(url, { withCredentials: true });
  }

  getUsername(userId: number): Observable<string> {
    // Assuming your API returns an object with a 'username' property
    return this.getUser(userId).pipe(
      map((user: any) => user.username),
      catchError(error => {
        console.error('Error fetching username', error);
        return of(''); // Provide a default value or handle the error as needed
      })
    );
  }
}
