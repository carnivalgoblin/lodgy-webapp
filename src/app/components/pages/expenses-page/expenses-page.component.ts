import {Component} from '@angular/core';
import {Expense} from "../../../models/expense";
import {GlobalConstants} from "../../../global/global-constants";

@Component({
  selector: 'expenses-page',
  templateUrl: './expenses-page.component.html',
  styleUrl: './expenses-page.component.scss'
})
export class ExpensesPageComponent{

  navbarLinks = GlobalConstants.navbarLinks;


  // expenses: Expense[] = [];

  expenses: Expense[] = GlobalConstants.mockExpenses;

}
