import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html', // Deve corrispondere al nome del file nella cartella
  styleUrl: './login.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  email = '';
  psw = '';
  errore = '';

  onLogin() {
    this.authService.login(this.email, this.psw).subscribe({
      error: (err) => this.errore = "Credenziali non valide o errore server"
    });
  }
}