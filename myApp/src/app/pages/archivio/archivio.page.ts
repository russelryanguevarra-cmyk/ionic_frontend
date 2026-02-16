// archivio.component.ts
import { Component, inject, signal } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
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
  IonText,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge,
  IonItem,
  IonLabel,
  IonFab,
  IonFabButton,
  IonButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  folderOpen, 
  documentTextOutline, 
  folderOpenOutline,
  car,
  qrCode,
  person,
  cash,
  add
} from 'ionicons/icons';
import { OfficinaService } from '../../services/officina.service';

@Component({
  selector: 'app-archivio',
  templateUrl: './archivio.component.html',
  styleUrls: ['./archivio.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UpperCasePipe,
    RouterLink,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonIcon,
    IonText,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    IonItem,
    IonLabel,
    IonFab,
    IonFabButton,
    IonButton
  ]
})
export class ArchivioComponent {
  officinaService = inject(OfficinaService);
  searchTerm = signal<string>('');

  constructor() {
    // Registra le icone utilizzate
    addIcons({
      folderOpen,
      documentTextOutline,
      folderOpenOutline,
      car,
      qrCode,
      person,
      cash,
      add
    });
  }

  getStatusColor(stato: string): string {
    const statusColors: { [key: string]: string } = {
      'COMPLETATO': 'success',
      'COMPLETATA': 'success',
      'CHIUSO': 'medium',
      'CHIUSA': 'medium',
      'FATTURATO': 'primary',
      'FATTURATA': 'primary',
      'IN_LAVORAZIONE': 'warning',
      'DA_APPROVARE': 'danger',
      'BOZZA': 'light'
    };
    return statusColors[stato] || 'medium';
  }

  // Metodo per filtrare in base alla ricerca
  get filteredArchivio() {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.officinaService.archivio();
    
    return this.officinaService.archivio().filter(item => 
      item.targa.toLowerCase().includes(term) ||
      item.modelloVeicolo.toLowerCase().includes(term) ||
      `${item.proprietario.nome} ${item.proprietario.cognome}`.toLowerCase().includes(term)
    );
  }
}