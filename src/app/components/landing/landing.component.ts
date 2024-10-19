import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from "../../global/global-constants";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{

  ngOnInit() {
    const titleElement = document.querySelector('.app-title');
    if (titleElement) {
      setTimeout(() => {
        titleElement.classList.add('tilted');
      }, 1);
    }
  }

  protected readonly GlobalConstants = GlobalConstants;
}
