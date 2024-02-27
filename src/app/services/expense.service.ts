import {Injectable} from '@angular/core';
import {GlobalConstants} from "../global/global-constants";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expense} from "../models/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  expenseURL: string = GlobalConstants.expenseURL;

  constructor(private http: HttpClient) { }

  getExpenses() {
    const url = `${this.expenseURL}/`;
    return this.http.get(url, { withCredentials: true });
  }

  getExpense(id: number): Observable<Expense> {
    const url = `${this.expenseURL}/${id}`;
    return this.http.get<Expense>(url, { withCredentials: true });
  }

  getExpensesByTripId(tripId: number) {
    const url = `${this.expenseURL}/trip/${tripId}/total`;
    return this.http.get(url, { withCredentials: true });
  }

  createExpense(expense: Expense) {
    const url = `${this.expenseURL}/create`;
    const tripId = expense.tripId;
    const params = new HttpParams().set('tripId', tripId);
    return this.http.post(url, expense, { params, withCredentials: true });
  }
}
