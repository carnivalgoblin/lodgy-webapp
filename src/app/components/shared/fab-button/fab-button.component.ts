import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'fab-button',
  templateUrl: './fab-button.component.html',
  styleUrl: './fab-button.component.scss',
  animations: [
    trigger('smallFabAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('200ms')),
    ]),
  ],
})
export class FabButtonComponent {

  showSmallFabs = false;

  handleClick(): void {
    this.showSmallFabs = !this.showSmallFabs;
  }

}
