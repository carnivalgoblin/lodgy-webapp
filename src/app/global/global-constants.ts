export class GlobalConstants {

  // Local Testing API
  public static apiURL: string = 'http://localhost:8080/';
  public static authURL: string = 'http://localhost:8080/api/auth';
  public static userURL: string = 'http://localhost:8080/api/users';
  public static tripURL: string = 'http://localhost:8080/api/trips';
  public static expenseURL: string = 'http://localhost:8080/api/expenses';

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
