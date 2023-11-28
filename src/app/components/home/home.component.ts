import { Component } from '@angular/core';
import {GlobalConstants} from "../../global/global-constants";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  navbarLinks = GlobalConstants.navbarLinks;

}
