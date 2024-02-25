import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddExpenseModalComponent} from "../components/modals/add-expense-modal/add-expense-modal.component";
import {AddTripModalComponent} from "../components/modals/add-trip-modal/add-trip-modal.component";
import {UpdateExpenseModalComponent} from "../components/modals/update-expense-modal/update-expense-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  openAddExpenseModal(isAdmin: boolean, isMod: boolean, isPreselected: boolean, tripId?: number): void {
    const classes: string[] = ['expense-add-modal-panel'];

    if (isAdmin) {
      classes.push('admin');
    }

    else if (isMod) {
      classes.push('mod');
    }

    else if (isPreselected) {
      classes.push('preselected');
    }

    else {
      classes.push('default');
    }

    const dialogRef = this.dialog.open(AddExpenseModalComponent, {
      panelClass: classes.join('-'), // Combine the classes into a space-separated string
      data: { isPreselected: isPreselected, tripId: tripId}
    });
  }

  openAddTripModal(): void {
    this.dialog.open(AddTripModalComponent, {
      panelClass: 'trip-add-modal-panel',
    });
  }

  openUpdateExpenseModal(): void {
    this.dialog.open(UpdateExpenseModalComponent, {
      panelClass: 'expense-update-modal-panel',
    });
  }
}
