import {Directive, HostListener} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[twoDecimal]'
})
export class TwoDecimalDirective {

  constructor(private ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: any): void {
    this.ngControl.valueAccessor?.writeValue(parseFloat(event).toFixed(2));
  }

}
