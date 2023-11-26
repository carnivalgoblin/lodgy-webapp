import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "../global/global-constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = GlobalConstants.apiURL;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const loginPayload = {
      username: username,
      password: password,
    };

    return this.http.post<any>(this.apiURL + '/api/auth/signin', loginPayload);
  }

  isAuthenticated(): boolean {
    return true;
  }
}
