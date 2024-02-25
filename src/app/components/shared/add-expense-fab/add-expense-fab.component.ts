import {Component, OnInit} from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {ModalService} from "../../../services/modal.service";
import {GlobalConstants} from "../../../global/global-constants";

@Component({
  selector: 'add-expense-fab',
  templateUrl: './add-expense-fab.component.html',
  styleUrl: './add-expense-fab.component.scss'
})
export class AddExpenseFabComponent implements OnInit{

  isAdmin: boolean = false;
  isMod: boolean = false;
  isPreselected: boolean = false;

  // trips: any[] = [];
  trips: any[] = GlobalConstants.mockTrips;

  constructor(
    private snackbarService: SnackbarService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('isAdmin') === 'true') {
      this.isAdmin = true;
    } else if (localStorage.getItem('isMod') === 'true') {
      this.isMod = true;
    }
  }

  handleAddExpenseClick(): void {
    this.modalService.openAddExpenseModal(this.isAdmin, this.isMod, this.isPreselected);
    console.log('Add Expense clicked!');
    this.snackbarService.openSnackbar('Add Expense clicked!');
  }


}
