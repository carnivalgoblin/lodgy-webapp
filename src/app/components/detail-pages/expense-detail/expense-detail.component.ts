import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExpenseService} from "../../../services/expense.service";
import {GlobalConstants} from "../../../global/global-constants";
import {Expense} from "../../../models/expense";
import {SnackbarService} from "../../../services/snackbar.service";
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrl: './expense-detail.component.scss'
})
export class ExpenseDetailComponent implements OnInit{

  navbarLinks = GlobalConstants.navbarLinks;
  expense: any;

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private snackbarService: SnackbarService,
    private modalService: ModalService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const expenseId = +params['id'];

      // Call the getExpense method from the ExpenseService
      this.expenseService.getExpense(expenseId).subscribe(
        (data: Expense) => {
          this.expense = data;

          console.log('Expense details fetched successfully: ' + this.expense.description);
        },
        error => {
          console.error('Error fetching expense details', error);
        }
      );
    });
  }

  updateExpense() {
    this.modalService.openUpdateExpenseModal();
    this.snackbarService.openSnackbar('Not implemented yet');
  }

  deleteExpense() {
    this.snackbarService.openSnackbar('Not implemented yet');
  }
}
