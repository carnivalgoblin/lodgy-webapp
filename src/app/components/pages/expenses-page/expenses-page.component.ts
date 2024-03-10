import {Component, OnInit} from '@angular/core';
import {Expense} from "../../../models/expense";
import {GlobalConstants} from "../../../global/global-constants";
import {ExpenseService} from "../../../services/expense.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'expenses-page',
  templateUrl: './expenses-page.component.html',
  styleUrl: './expenses-page.component.scss'
})
export class ExpensesPageComponent implements OnInit{

  navbarLinks = GlobalConstants.navbarLinks;

  userId!: number;
  expenses: Expense[] = [];

  constructor(
    private readonly expenseService: ExpenseService,
    private readonly authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authService.getCurrentUserId().subscribe((result: any) => {
      this.userId = result.id;
      this.getExpenses(this.userId);
      console.log(this.userId);
    });

  }

  getExpenses(userId: number) {
  console.log('Getting expenses for user with id:', userId);
    this.expenseService.getExpensesByUserId(userId).subscribe((result) => {
      this.expenses = result;
    });
  }

}
