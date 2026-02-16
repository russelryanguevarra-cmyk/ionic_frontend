import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Assicurati che il nome del file e della classe siano corretti

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));