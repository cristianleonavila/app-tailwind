import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
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
