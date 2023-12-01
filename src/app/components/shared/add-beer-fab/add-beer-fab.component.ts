import { Component } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";

@Component({
  selector: 'add-beer-fab',
  templateUrl: './add-beer-fab.component.html',
  styleUrl: './add-beer-fab.component.scss'
})
export class AddBeerFabComponent {

  constructor(private snackbarService: SnackbarService) {}

  handleAddBeerClick(): void {
    // Logic to handle adding a beer
    console.log('Add Beer clicked!');
    this.snackbarService.openSnackbar('Beer me, beer you, beer us together!');
  }

}
