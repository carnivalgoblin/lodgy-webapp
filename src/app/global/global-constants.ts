import {publish} from "rxjs";

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

  // Mock Data
  public static mockTrips = [
    {
      id: 1,
      destination: 'Amsterdam',
      startDate: new Date('2021-05-01'),
      endDate: new Date('2021-05-10'),
      userIds: [1, 2],
      expenseIds: [1, 2],
      description: 'A beautiful city known for its canals and historic architecture.'
    },
    {
      id: 2,
      destination: 'Berlin',
      startDate: new Date('2021-06-01'),
      endDate: new Date('2021-06-10'),
      userIds: [1, 2],
      expenseIds: [1, 2],
      description: 'The capital and largest city of Germany, famous for its rich history.'
    },
    {
      id: 3,
      destination: 'Paris',
      startDate: new Date('2021-07-01'),
      endDate: new Date('2021-07-10'),
      userIds: [1, 2],
      expenseIds: [1, 2],
      description: 'The City of Love, known for its art, fashion, and culture.'
    },
    // currentTrip
    {
      id: 4,
      destination: 'London',
      startDate: new Date('2023-12-01'),
      endDate: new Date('2023-12-31'),
      userIds: [1, 2],
      expenseIds: [1, 2],
      description: 'The capital of the United Kingdom, a global city with a diverse history.'
    },
    // upcomingTrip
    {
      id: 5,
      destination: 'Rome',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2022-01-10'),
      userIds: [1, 2],
      expenseIds: [1, 2],
      description: 'The Eternal City, known for its ancient history and architecture.'
    },
    {
      id: 6,
      destination: 'Madrid',
      startDate: new Date('2024-02-01'),
      endDate: new Date('2024-02-10'),
      userIds: [1, 2],
      expenseIds: [1, 2],
      description: 'The capital and largest city of Spain, famous for its lively atmosphere.'
    }
  ];

  public static mockExpenses = [
    {
      id: 1,
      amount: 100,
      description: 'Flight',
      userId: 1,
      tripId: 1
    },
    {
      id: 2,
      amount: 200,
      description: 'Hotel',
      userId: 2,
      tripId: 1
    },
    {
      id: 3,
      amount: 300,
      description: 'Food',
      userId: 1,
      tripId: 2
    },
    {
      id: 4,
      amount: 400,
      description: 'Souvenirs',
      userId: 2,
      tripId: 2
    },
    {
      id: 5,
      amount: 500,
      description: 'Flight',
      userId: 1,
      tripId: 3
    },
    {
      id: 6,
      amount: 600,
      description: 'Hotel',
      userId: 2,
      tripId: 3
    }
  ];

  public static singleTrip = {
    id: 1,
    destination: 'Amsterdam',
    startDate: new Date('2021-05-01'),
    endDate: new Date('2021-05-10'),
    userIds: [1, 2],
    expenseIds: [1, 2],
    description: 'A beautiful city known for its canals and historic architecture.'
  };

}




