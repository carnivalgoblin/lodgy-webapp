import {Injectable} from '@angular/core';
import {GlobalConstants} from "../global/global-constants";
import {AuthService} from "./auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = GlobalConstants.apiURL;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getUser(id: number) {
    const t = localStorage.getItem('authToken') as string;
    const url = `${this.apiURL}/users/${id}`;
    const headers = this.createHeaders(t);
    return this.http.get(url, {headers});
  }

  private createHeaders(token: string) {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
}
