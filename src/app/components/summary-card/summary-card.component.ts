import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'summary-card',
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss'
})
export class SummaryCardComponent implements OnInit{

  @Input() summary: { type: string, total: number, amount: number } = { type: '', total: 0, amount: 0 };

  isTrips: boolean = false;
  isExpenses: boolean = false;

  constructor() {}

  ngOnInit() {
    this.getType()
  }

  getType() {
    if (this.summary.type == 'trips') {
      this.isTrips = true;
    } else if (this.summary.type == 'expenses'){
      this.isExpenses = true;
    }
  }

}
