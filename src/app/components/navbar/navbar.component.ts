import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showMenu = false;
  brandName = "Kvothe's Books"
  navLinks = [
    {
      label: 'News',
      href: '#'
    },
    {
      label: 'Books',
      href: '#'
    },
    {
      label: 'Events',
      href: '#'
    },
    {
      label: 'About',
      href: '#'
    },
  ]

  constructor() { }

  displayMenu() {
    this.showMenu = !this.showMenu
  }

}
