import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "../global/global-constants";
import sha256 from 'crypto-js/sha256';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = GlobalConstants.apiURL;
  authURL: string = GlobalConstants.authURL;
  userURL: string = GlobalConstants.userURL;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const hashedPassword = sha256(password).toString();

    const loginPayload = {
      username: username,
      password: hashedPassword,
    };

    return this.http.post<any>(this.authURL + '/signin', loginPayload, { withCredentials: true });
  }

  getCurrentUserId(): any {
    return this.http.get(this.userURL + '/current', { withCredentials: true });
  }

  isAuthenticated(): boolean {
    // return document.cookie.includes('lodgy_token');
    return true;
  }
}
