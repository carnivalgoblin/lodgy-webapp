import { Component } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'add-trip-fab',
  templateUrl: './add-trip-fab.component.html',
  styleUrl: './add-trip-fab.component.scss'
})
export class AddTripFabComponent {

  constructor(private snackbarService: SnackbarService) {}

  handleAddTripClick(): void {
    // Logic to handle adding a trip
    console.log('Add Trip clicked!');
    this.snackbarService.openSnackbar('Add Trip clicked!');
  }

}
