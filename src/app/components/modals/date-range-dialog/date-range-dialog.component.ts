import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {dateRangeFilter} from "../../../utils/date-range-filter";

@Component({
  selector: 'date-range-dialog',
  templateUrl: './date-range-dialog.component.html',
  styleUrl: './date-range-dialog.component.scss'
})
export class DateRangeDialogComponent implements OnInit{

  dateRangeForm!: FormGroup;
  numberOfDays!: number;
  minStartDate!: Date;
  maxEndDate!: Date;

  constructor(
    public dialogRef: MatDialogRef<DateRangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.calculateDays();
    this.subscribeToFormChanges();
  }

  initForm(): void {
    const startDate = new Date(this.data.startDate);
    const endDate = new Date(this.data.endDate);

    this.minStartDate = startDate;
    this.maxEndDate = endDate;

    this.dateRangeForm = this.formBuilder.group({
      startDate: [startDate],
      endDate: [endDate],
    });
  }

  calculateDays(): void {
    const startDate = new Date(this.dateRangeForm.value.startDate);
    const endDate = new Date(this.dateRangeForm.value.endDate);

    if (endDate < startDate) {
      // If end date is before start date, set end date equal to start date
      this.dateRangeForm.patchValue({ endDate: startDate });
    }

    const timeDifference = Math.abs(endDate.getTime() - startDate.getTime());
    this.numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
  }

  subscribeToFormChanges(): void {
    this.dateRangeForm.valueChanges.subscribe(() => {
      this.calculateDays();
    });
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onSave(): void {
    this.dialogRef.close(this.numberOfDays);
  }

  filterStartDate = (date: Date | null): boolean => {
    return dateRangeFilter(this.minStartDate, this.maxEndDate)(date!);
  };

  filterEndDate = (date: Date | null): boolean => {
    const startDate = this.dateRangeForm.value.startDate;
    return dateRangeFilter(startDate, null!)(date!);
  };
}
