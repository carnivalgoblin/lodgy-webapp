import {Component} from '@angular/core';
import {GlobalConstants} from "../../../global/global-constants";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  navbarLinks = GlobalConstants.navbarLinks;

  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {};

  register() {
    this.authService.register(this.username, this.password)
      .subscribe(
        (response) => {
          const username = response.username;
          const userId = response.id;
          console.log('Registration successful!');

          localStorage.setItem('loggedUsername', username);
          localStorage.setItem('loggedUserId', userId);

          if (response.roles.includes('ROLE_ADMIN')) {
            localStorage.setItem('isAdmin', 'true');
          } else {
            localStorage.setItem('isAdmin', 'false');
          }

          if (response.roles.includes('ROLE_MODERATOR')) {
            localStorage.setItem('isMod', 'true');
          } else {
            localStorage.setItem('isMod', 'false');
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
