import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {GlobalConstants} from "../../../global/global-constants";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  navbarLinks = GlobalConstants.navbarLinks;

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

          if (response.roles.includes('ROLE_ADMIN')) {
            localStorage.setItem('isAdmin', 'true');
          } else {
            localStorage.setItem('isAdmin', 'false');
          }

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
