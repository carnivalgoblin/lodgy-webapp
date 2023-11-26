import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  navbarLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/profile', label: 'Profile'}
  ];

  username: string = '';
  password: string = '';

  register() {
    // Implement your registration logic here
    console.log('Register button clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
