import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  openSnackbar(message: string): void {
    this.snackBar.open(message, 'OK', {
      duration: 3000, // Dauer der Snackbar in Millisekunden
    });
  }
}
