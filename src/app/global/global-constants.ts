export class GlobalConstants {

  // Local Testing API
  public static apiURL: string = 'http://localhost:8080';

  // Production API
  // public static apiURL: string = 'https://travel-expense-tracker-api.herokuapp.com';

  // Standard NavBar Links
  public static navbarLinks = [
    { path: '/home', label: 'Home' },
    { path: '/trips', label: 'Trips' },
    { path: '/expenses', label: 'Expenses' },
    { path: '/profile', label: 'Profile'}
  ];

  // Date Format
  public static dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
}
