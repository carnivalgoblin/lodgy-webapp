import { Component } from '@angular/core';
import {SnackbarService} from "../../../services/snackbar.service";
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'add-trip-fab',
  templateUrl: './add-trip-fab.component.html',
  styleUrl: './add-trip-fab.component.scss'
})
export class AddTripFabComponent {

  constructor(
    private snackbarService: SnackbarService,
    private modalService: ModalService
  ) {}

  handleAddTripClick(): void {
    this.modalService.openAddTripModal();
    console.log('Add Trip clicked!');
    this.snackbarService.openSnackbar('Add Trip clicked!');
  }

}
