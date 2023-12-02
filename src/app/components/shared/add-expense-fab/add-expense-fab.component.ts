import { Component } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'add-expense-fab',
  templateUrl: './add-expense-fab.component.html',
  styleUrl: './add-expense-fab.component.scss'
})
export class AddExpenseFabComponent {

  constructor(
    private snackbarService: SnackbarService,
    private modalService: ModalService
  ) {}

  handleAddExpenseClick(): void {
    this.modalService.openAddExpenseModal();
    console.log('Add Expense clicked!');
    this.snackbarService.openSnackbar('Add Expense clicked!');
  }


}
