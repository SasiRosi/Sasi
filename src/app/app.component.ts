

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
    { color: 'blue', label: 'letto',visible:true },
    { color: 'blue', label: 'comodino',visible:true  },
    { color: 'blue', label: 'poster' ,visible:true },
    { color: 'blue', label: '1$' ,visible:true },
    { color: 'blue', label: '5$' ,visible:true },
    { color: 'blue', label: '10$' ,visible:true },
    { color: 'blue', label: '20' ,visible:true },
    { color: 'blue', label: '50' ,visible:true },
    { color: 'blue', label: '100' ,visible:true },
    { color: 'blue', label: '200' ,visible:true },
    // altre barre
  ];

  rightBars: Bar[] = [
    { color: 'red', label: '1000',visible:true  },
    { color: 'red', label: '2000' ,visible:true },
    { color: 'red', label: '3000' ,visible:true },
    { color: 'red', label: '4000' ,visible:true },
    { color: 'red', label: '5000' ,visible:true },
    { color: 'red', label: '6000' ,visible:true },
    { color: 'red', label: '10000' ,visible:true },
    { color: 'red', label: '100.000' ,visible:true },
    { color: 'red', label: '200.000' ,visible:true },
    { color: 'red', label: '500.000' ,visible:true },

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
