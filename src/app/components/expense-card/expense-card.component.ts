import {Component, Input} from '@angular/core';
import {Expense} from "../../models/expense";

@Component({
  selector: 'expense-card',
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.scss'
})
export class ExpenseCardComponent {

  @Input() expense!: Expense;

}
