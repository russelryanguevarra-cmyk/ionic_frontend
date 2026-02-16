// officina-dashboard.component.ts
import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonLabel,
  IonItem,
  IonNote,
  IonSearchbar,
  IonFab,
  IonFabButton,
  IonFabList,
  IonRefresher,
  IonRefresherContent,
  IonBadge
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  construct, 
  refresh, 
  time, 
  checkmarkDone, 
  filter, 
  car,
  carSport,
  person,
  call,
  warning,
  arrowForward,
  build,
  checkmark,
  documentText,
  calendar,
  constructOutline,
  add,
  search,
  qrCode
} from 'ionicons/icons';
import { OfficinaService } from '../../services/officina.service';

@Component({
  selector: 'app-officina-dashboard',
  templateUrl: './officina-dashboard.component.html',
  styleUrls: ['./officina-dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    DatePipe,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonIcon,
    IonButton,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonLabel,
    IonItem,
    IonNote,
    IonSearchbar,
    IonFab,
    IonFabButton,
    IonFabList,
    IonRefresher,
    IonRefresherContent,
    IonBadge
  ]
})
export class OfficinaDashboardComponent {
  officinaService = inject(OfficinaService);
  
  searchTerm = signal<string>('');
  selectedStatus = signal<string>('');

  // Computed values
  inRiparazione = computed(() => {
    return this.officinaService.inLavorazione().filter(i => i.stato === 'IN_RIPARAZIONE').length;
  });

  pronte = computed(() => {
    return this.officinaService.inLavorazione().filter(i => i.stato === 'PRONTA').length;
  });

  filteredInterventi = computed(() => {
    let interventi = this.officinaService.inLavorazione();
    
    // Filter by search term
    const term = this.searchTerm().toLowerCase();
    if (term) {
      interventi = interventi.filter(i => 
        i.targa.toLowerCase().includes(term) ||
        i.modelloVeicolo.toLowerCase().includes(term) ||
        `${i.proprietario.nome} ${i.proprietario.cognome}`.toLowerCase().includes(term) ||
        i.proprietario.telefono?.includes(term)
      );
    }
    
    // Filter by status
    if (this.selectedStatus()) {
      interventi = interventi.filter(i => i.stato === this.selectedStatus());
    }
    
    return interventi;
  });

  constructor() {
    addIcons({
      construct,
      refresh,
      time,
      checkmarkDone,
      filter,
      car,
      carSport,
      person,
      call,
      warning,
      arrowForward,
      build,
      checkmark,
      documentText,
      calendar,
      constructOutline,
      add,
      search,
      qrCode
    });
  }

  getStatusColor(stato: string): string {
    const colors: { [key: string]: string } = {
      'ASSEGNATA': 'light',
      'RICEVUTA': 'warning',
      'IN_RIPARAZIONE': 'primary',
      'PRONTA': 'success',
      'COMPLETATO': 'success',
      'CHIUSO': 'medium',
      'FATTURATO': 'secondary'
    };
    return colors[stato] || 'medium';
  }

  cambiaStato(id: string, nuovoStato: string): void {
    this.officinaService.aggiornaStato(id, nuovoStato as any);
  }

  emettiFattura(id: string): void {
    this.officinaService.aggiornaStato(id, 'FATTURATO');
    // Navigate to invoice page
  }

  filterByStatus(status: string): void {
    this.selectedStatus.set(status);
  }

  resetFilters(): void {
    this.searchTerm.set('');
    this.selectedStatus.set('');
  }

  filterInterventi(): void {
    // Triggered by search input
  }

  refreshDashboard(): void {
    this.officinaService.caricaPratiche();
  }

  handleRefresh(event: any): void {
    setTimeout(() => {
      this.officinaService.caricaPratiche();
      event.target.complete();
    }, 2000);
  }
}