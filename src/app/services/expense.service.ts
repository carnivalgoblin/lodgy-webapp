import {Injectable} from '@angular/core';
import {GlobalConstants} from "../global/global-constants";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Expense} from "../models/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  expenseURL: string = GlobalConstants.expenseURL;

  constructor(private http: HttpClient, private authService: AuthService) { }

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
}
