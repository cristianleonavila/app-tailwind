import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/login/login.component')
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
    loadChildren: () => [
       {
        path: 'test-component',
        loadComponent: () => import('./pages/test-component/test-component.component')
      },
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];
