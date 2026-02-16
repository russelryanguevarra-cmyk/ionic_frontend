import { Component, inject, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OfficinaService } from '../../services/officina';

@Component({
  selector: 'app-officina-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './officina-dashboard.html', // Punta al file HTML
  styleUrl: './officina-dashboard.css'      // Punta al file CSS
})
export class OfficinaDashboardComponent implements OnInit {
  public officinaService = inject(OfficinaService);

  // Statistiche calcolate in tempo reale
  inRiparazione = computed(() => 
    this.officinaService.inLavorazione().filter(p => p.stato === 'IN_RIPARAZIONE').length
  );
  
  pronte = computed(() => 
    this.officinaService.inLavorazione().filter(p => p.stato === 'PRONTA').length
  );

  ngOnInit() {
    this.officinaService.caricaPratiche();
  }

  // Metodo per aggiornare lo stato (Usa il PUT del service)
  cambiaStato(id: number, nuovoStato: string) {
    this.officinaService.aggiornaStato(id, nuovoStato).subscribe();
  }

  // Metodo per emettere fattura (Usa il POST del service)
  emettiFattura(id: number) {
    if(confirm("Confermi l'emissione della fattura?")) {
      this.officinaService.emettiFattura(id).subscribe(() => {
        alert("Fattura emessa con successo!");
      });
    }
  }
}