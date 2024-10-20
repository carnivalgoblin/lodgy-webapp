import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ExpenseService} from "../../../services/expense.service";
import {GlobalConstants} from "../../../global/global-constants";
import {Expense} from "../../../models/expense";
import {SnackbarService} from "../../../services/snackbar.service";
import {ModalService} from "../../../services/modal.service";
import {TripService} from "../../../services/trip.service";
import {Trip} from "../../../models/trip";

@Component({
  selector: 'expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrl: './expense-detail.component.scss'
})
export class ExpenseDetailComponent implements OnInit{

  navbarLinks = GlobalConstants.navbarLinks;
  expense!: Expense;
  trip?: Trip;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService,
    private tripService: TripService,
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
          this.getTripForExpense();

          // console.log('Expense details fetched successfully: ' + this.expense.description);
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
    this.expenseService.deleteExpense(this.expense.id!)
      .subscribe({
        next: (res) => {
          console.log("Expense deleted")
          this.router.navigate(['/expenses']);
        },
        error: (err) => {
          console.log("Error deleting expense:", err);
        }
      })
  }

  getTripForExpense() {
    this.tripService.getTrip(this.expense.tripId).subscribe({
      next: (res) => {
        this.trip = res;
      }
    })
  }
}
