import { Component } from '@angular/core';

import { MenuItem } from './core/models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  menuItem: MenuItem[] = [
    {
      icon: 'dashboard',
      toolTip: 'Dashboard',
      routerLink: 'dashboard',
    },
    {
      icon: 'sports_martial_arts',
      toolTip: 'Heroes',
      routerLink: 'heroes',
    },
  ];
}
