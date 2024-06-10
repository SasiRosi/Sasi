import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule per utilizzare input e form
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule per reattività nei form
import { AppComponent } from './app.component';
import { BarListComponent } from './bar-list/bar-list.component';
import { BarListRComponent } from './bar-list-r/bar-list-r.component'; // Assicurati di importare i tuoi componenti
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent, // Aggiungi i componenti usati nell'app
    BarListComponent, BarListRComponent,
    // Altri componenti
  ],
  imports: [
        BrowserAnimationsModule,
    BrowserModule, // Obbligatorio per le app Angular
    FormsModule, // Se utilizzi ngModel o form-based inputs
    ReactiveFormsModule, // Se utilizzi ReactiveForms
    // Altri moduli che potrebbero essere necessari per il tuo progetto
  ],
  providers: [], // Puoi aggiungere servizi qui
  bootstrap: [AppComponent], // Il componente principale dell'app
})
export class AppModule {}
