

// Component "AppComponent"
import { Component } from '@angular/core';
import { Bar } from './shared/bar.interface'; // Assicurati che il percorso sia corretto
import { AudioService } from './shared/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  leftBars: Bar[] = [
    { color: 'blue', label: '0 Euro',visible:true },
    { color: 'blue', label: 'Busta di patatine vivaci',visible:true  },
    { color: 'blue', label: 'Certamen con Brigida franzese' ,visible:true },
    { color: 'blue', label: 'Set fotografico con il tablet di Pinuccio' ,visible:true },
    { color: 'blue', label: 'Giornata al pascolo con la Sheep' ,visible:true },
    { color: 'blue', label: 'Cena con Annamaria e Gennaro' ,visible:true },
    { color: 'blue', label: 'Pizza da gustami' ,visible:true },
    { color: 'blue', label: 'Tirocinio in ospedale con Pasquale De Giulio\n' ,visible:true },
    { color: 'blue', label: 'Seduta dal fisioterapista di Lilia' ,visible:true },
    { color: 'blue', label: 'Lezione di guida con Luigi Franzese' ,visible:true },
    // altre barre
  ];

  rightBars: Bar[] = [
    { color: 'red', label: 'Panino da paninoteca da Francesco',visible:true  },
    { color: 'red', label: 'Pomeriggio di ozio col Terranera' ,visible:true },
    { color: 'red', label: '20 Euro' ,visible:true },
    { color: 'red', label: 'Degustazione di formaggi alla Guerriero group' ,visible:true },
    { color: 'red', label: 'Buono Amazon da 50 euro' ,visible:true },
    { color: 'red', label: 'Shopping con zia Pina' ,visible:true },
    { color: 'red', label: 'Weekend a Ischia a casa di Lilia ' ,visible:true },
    { color: 'red', label: 'Buono per un volo da 200 euro\n' ,visible:true },
    { color: 'red', label: 'Buono da Zara di 300 euro' ,visible:true },
    { color: 'red', label: 'Una Settimana di vacanza in Sicilia' ,visible:true },

    // altre barre
  ];


  isFirstImage: boolean = true; // Inizialmente, mostri la prima immagine
  showBirthdayText: boolean = false; // Indica se mostrare il testo di buon compleanno

  win: Boolean = true;
  toggleImage() {

    if (this.win == true) {
      this.audioService.playSound('assets/music/win.wav');
      this.win = false;
    }
    else {
      this.win = true;
    }
    this.isFirstImage = !this.isFirstImage; // Alterna tra le immagini
    this.showBirthdayText = !this.showBirthdayText; // Alterna la visualizzazione della scritta
  }

  getCurrentImage() {
    return this.isFirstImage ? 'assets/pacco4.jpg' : 'assets/paccoap.jpg'; // Selezione dell'immagine corrente
  }

  constructor(private audioService: AudioService) { }

   ngOnInit() {
    // this.audioService.startBackgroundMusic();
   }

   startMusic() {
    this.audioService.startBackgroundMusic();
  }


}
