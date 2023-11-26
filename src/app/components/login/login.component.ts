import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  navbarLinks = [
    { path: '/', label: 'Home' },
    { path: '/trips', label: 'Trips' },
    { path: '/expenses', label: 'Expenses' },
    { path: '/profile', label: 'Profile'}
  ];

  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {};

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response) => {
          const username = response.username;
          console.log('Login successful!');

          localStorage.setItem('loggedUsername', username);

          if (this.authService.isAuthenticated()) {
            this.router.navigate(['/profile']);
          } else {
            console.error('Authentication failed. Unable to retrieve token.');
          }
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }
}
