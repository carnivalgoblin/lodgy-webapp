import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authToken: string | null = null;

  constructor(private http: HttpClient) {}

  setAuthToken(token: string): void {
    this.authToken = token;
    // You may want to save the token to local storage for persistence across page reloads
    localStorage.setItem('authToken', token);
  }

  getAuthToken(): string | null {
    // If the token is not stored in memory, try to retrieve it from local storage
    if (!this.authToken) {
      this.authToken = localStorage.getItem('authToken');
    }
    return this.authToken;
  }

  clearAuthToken(): void {
    this.authToken = null;
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    // Check if the token is present and not expired
    const token = this.getAuthToken();
    return !!token;
  }

  login(username: string, password: string) {
    const loginPayload = {
      username: username,
      password: password,
    };

    // Replace 'your-backend-api-endpoint' with the actual endpoint for user authentication
    return this.http.post<any>('your-backend-api-endpoint', loginPayload);
  }
}
