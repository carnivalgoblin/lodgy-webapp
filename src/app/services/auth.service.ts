import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "../global/global-constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = GlobalConstants.apiURL;
  authURL: string = GlobalConstants.authURL;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const loginPayload = {
      username: username,
      password: password,
    };

    return this.http.post<any>(this.authURL + '/signin', loginPayload, { withCredentials: true });
  }

  isAuthenticated(): boolean {
    // return document.cookie.includes('lodgy_token');
    return true;
  }
}
