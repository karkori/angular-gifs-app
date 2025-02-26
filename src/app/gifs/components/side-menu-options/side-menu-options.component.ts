import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOptions {
  icon: string;
  name: string;
  description: string;
  path: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
  public menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      name: 'Trending',
      description: 'Trending Gifs',
      path: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      name: 'Search',
      description: 'Search Gifs',
      path: '/dashboard/search',
    },
  ];
}
