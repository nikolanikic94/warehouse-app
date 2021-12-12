import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  activeElement: string;

  constructor() {}

  ngOnInit(): void {}

  addActiveClass(navLink: string) {
    this.activeElement = navLink;
  }
}
