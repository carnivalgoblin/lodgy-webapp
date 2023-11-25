import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  navbarLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/profile', label: 'Profile'}
  ];

  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {};

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response) => {

          const token = response.token;
          this.authService.setAuthToken(token);
          console.log('Login successful!');

          if (this.authService.isAuthenticated()) {
            this.router.navigate(['/profile']);
          }
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }

}
