import {Component, Input, OnInit} from '@angular/core';
import {Expense} from "../../../models/expense";
import {Router} from "@angular/router";

@Component({
  selector: 'expense-card',
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.scss'
})
export class ExpenseCardComponent implements OnInit{

  @Input() expense!: Expense;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openExpenseDetail(expenseId: number) {
    const navigationExtras = {
      state: {
        expenseId: expenseId
      }
    };
    this.router.navigate(['/expense', expenseId], navigationExtras);
  }

}
