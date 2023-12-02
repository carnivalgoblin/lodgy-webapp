import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddExpenseModalComponent} from "../components/modals/add-expense-modal/add-expense-modal.component";
import {AddTripModalComponent} from "../components/modals/add-trip-modal/add-trip-modal.component";
import {UpdateExpenseModalComponent} from "../components/modals/update-expense-modal/update-expense-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  openAddExpenseModal(): void {
    this.dialog.open(AddExpenseModalComponent, {
      width: '400px', // Adjust the width as needed
      height: '500px'
    });
  }

  openAddTripModal(): void {
    this.dialog.open(AddTripModalComponent, {
      width: '400px', // Adjust the width as needed
      height: '500px'
    });
  }

  openUpdateExpenseModal(): void {
    this.dialog.open(UpdateExpenseModalComponent, {
      width: '400px', // Adjust the width as needed
      height: '300px'
    });
  }
}
