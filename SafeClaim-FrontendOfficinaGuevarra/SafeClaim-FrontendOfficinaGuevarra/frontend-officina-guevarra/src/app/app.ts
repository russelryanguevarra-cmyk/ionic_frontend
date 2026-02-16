import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav style="background: #2c3e50; color: white; padding: 1rem; display: flex; justify-content: space-between;">
      <h2 style="margin: 0;">🔧 GestionaliOfficina Pro</h2>
      <div>
        <a routerLink="/dashboard" style="color: white; margin-left: 15px; text-decoration: none;">Dashboard</a>
        <a routerLink="/archivio" style="color: white; margin-left: 15px; text-decoration: none;">Archivio</a>
      </div>
    </nav>
    <main style="padding: 20px;">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  public authService = inject(AuthService);
}