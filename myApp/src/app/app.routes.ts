import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registrazione',
    loadComponent: () => import('./pages/registrazione/registrazione.page').then( m => m.RegistrazionePage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'archivio',
    loadComponent: () => import('./pages/archivio/archivio.page').then( m => m.ArchivioPage)
  },
];
