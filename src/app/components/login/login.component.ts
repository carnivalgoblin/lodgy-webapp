import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Implement your login logic here
    console.log('Login button clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
