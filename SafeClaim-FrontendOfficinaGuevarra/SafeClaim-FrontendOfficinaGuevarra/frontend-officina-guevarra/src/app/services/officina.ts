import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Pratica } from '../models/pratica.model';

@Injectable({ providedIn: 'root' })
export class OfficinaService {
  private http = inject(HttpClient);
  private API_URL = 'http://localhost:5000/api'; 

  // --- STATO PRIVATO ---
  #pratiche = signal<Pratica[]>([]);
  filtroTarga = signal<string>(''); 

  // --- STATI PUBBLICI (REATTIVI) ---
  
  // 1. Filtro per la barra di ricerca
  praticheFiltrate = computed(() => {
    const targa = this.filtroTarga().toLowerCase();
    return this.#pratiche().filter(p => p.targa.toLowerCase().includes(targa));
  });

  // 2. Per la Dashboard (Tutto quello che non è chiuso o fatturato)
  inLavorazione = computed(() => 
    this.praticheFiltrate().filter(p => p.stato !== 'CHIUSA' && p.stato !== 'FATTURATA')
  );

  // 3. Per l'Archivio (Le pratiche storiche)
  archivio = computed(() => 
    this.praticheFiltrate().filter(p => p.stato === 'CHIUSA' || p.stato === 'FATTURATA')
  );

  // --- METODI API (Basati sulla tua tabella) ---

  /** GET /interventi - Elenco interventi */
  caricaPratiche() {
    this.http.get<Pratica[]>(`${this.API_URL}/interventi`).subscribe(dati => {
      this.#pratiche.set(dati);
    });
  }

  /** PUT /interventi/{id} - Aggiorna intervento */
  aggiornaStato(id: number, nuovoStato: string, note?: string): Observable<any> {
    const payload = { stato: nuovoStato, noteOfficina: note };
    
    // Cambiato da PATCH a PUT come da tabella
    return this.http.put(`${this.API_URL}/interventi/${id}`, payload).pipe(
      tap(() => this.caricaPratiche()) // Aggiorna la lista automaticamente dopo il cambio
    );
  }

  /** POST /interventi/{id}/fattura - Emissione fattura */
  emettiFattura(id: number): Observable<any> {
    // Come da tabella: POST per la fattura
    return this.http.post(`${this.API_URL}/interventi/${id}/fattura`, {}).pipe(
      tap(() => this.caricaPratiche())
    );
  }
}