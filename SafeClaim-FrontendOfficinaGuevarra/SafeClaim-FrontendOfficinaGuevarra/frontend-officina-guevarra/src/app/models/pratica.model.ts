export interface Pratica {
  id: number;
  targa: string;
  modelloVeicolo: string;
  proprietario: {
    nome: string;
    cognome: string;
    telefono: string;
    email: string;
  };
  perizia: {
    descrizioneDanno: string;
    importoPreventivato: number;
    pezziDaSostituire: string[];
  };
  // Aggiungiamo FATTURATA qui sotto
  stato: 'ASSEGNATA' | 'RICEVUTA' | 'IN_RIPARAZIONE' | 'PRONTA' | 'CHIUSA' | 'FATTURATA';
  dataAssegnazione: Date;
  noteOfficina?: string;
}