import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private readonly API_URL = 'http://localhost:5000'; // Controlla l'URL del backend

  // Signal per lo stato dell'utente
  currentUser = signal<any>(null);

  // Login: invia email e psw
  login(email: string, psw: string) {
    return this.http.post(`${this.API_URL}/login`, { email, psw }).pipe(
      tap((res: any) => {
        this.currentUser.set(res.officina);
        this.router.navigate(['/dashboard']);
      })
    );
  }

  // Registrazione: invia tutti i campi richiesti
  registrazione(dati: any) {
    return this.http.post(`${this.API_URL}/registrazione`, dati).pipe(
      tap(() => this.router.navigate(['/login']))
    );
  }

  logout() {
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}