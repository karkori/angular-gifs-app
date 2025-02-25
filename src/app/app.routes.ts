import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./gifs/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search/search.component'),
      },
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending-page/trending-page.component'),
      },
      {
        path: "**",
        redirectTo: "trending",
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
