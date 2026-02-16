import { Routes } from '@angular/router';
import { LoginComponent } from './login/login'; 
import { RegistrazioneComponent } from './registrazione/registrazione';
import { OfficinaDashboardComponent } from './components/officina-dashboard/officina-dashboard';
import { ArchivioComponent } from './archivio/archivio'; 

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'dashboard', component: OfficinaDashboardComponent },
  { path: 'archivio', component: ArchivioComponent }, 
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];