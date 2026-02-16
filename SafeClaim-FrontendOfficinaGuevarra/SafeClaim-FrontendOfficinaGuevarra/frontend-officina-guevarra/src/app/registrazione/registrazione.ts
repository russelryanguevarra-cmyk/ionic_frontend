import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // Importante per il link
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-registrazione',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registrazione.html',
  styleUrl: './registrazione.css'
})
export class RegistrazioneComponent {
  authService = inject(AuthService);

  // Questi sono i nomi esatti che vuole il tuo Backend Flask
  dati = {
    ragione_sociale: '',
    citta: '',
    indirizzo: '',
    telefono: '',
    email: '',
    psw: ''
  };

  onRegister() {
    this.authService.registrazione(this.dati).subscribe({
      next: (res) => {
        alert("Registrazione avvenuta! Ora puoi fare il login.");
      },
      error: (err) => {
        alert("Errore: controlla i dati o se l'email esiste già.");
      }
    });
  }
}