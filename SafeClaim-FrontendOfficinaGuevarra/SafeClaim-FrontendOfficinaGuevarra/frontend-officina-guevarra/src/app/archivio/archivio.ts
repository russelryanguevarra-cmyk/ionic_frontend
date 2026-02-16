import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficinaService } from '../services/officina'; // Controlla che il percorso sia giusto

@Component({
  selector: 'app-archivio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archivio.html', // Rimosso '.component' se il tuo file si chiama archivio.html
  styleUrl: './archivio.css'      // Rimosso '.component' se il tuo file si chiama archivio.css
})

export class ArchivioComponent implements OnInit {
  // Iniettiamo il service
  public officinaService = inject(OfficinaService);

  ngOnInit() {
    // Rinominiamo in caricaPratiche() per farlo coincidere con il tuo service
    this.officinaService.caricaPratiche(); 
  }
}