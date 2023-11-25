import {Component, HostListener, Input} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  @Input() links: { path: string; label: string; }[] = [];

  isScrolled: boolean = false;
  isMobile: boolean = false;
  showNavigation: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Subscribe to route changes to toggle navigation visibility
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Check if the current route is the Landing page
        this.showNavigation = this.route.snapshot.firstChild?.routeConfig?.path !== '';
      });
  }

  ngOnInit() {
    console.log(this.links)
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  // @HostListener('window:resize', [])
  // onWindowResize() {
  //   this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  // }
}
