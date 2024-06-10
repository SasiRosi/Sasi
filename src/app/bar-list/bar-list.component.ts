import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';
import { Bar } from '../shared/bar.interface'; // Assicurati che il percorso sia corretto
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AudioService } from '../shared/audio.service';


@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.css'],
   animations: [
    trigger('barState', [
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.5)'
      })),
      transition('visible => hidden', [
        animate('0.5s ease-out')
      ]),
      transition('hidden => visible', [
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class BarListComponent {
  // visible:Boolean;
  @Input()  bars: Bar[] = []; // Tipo corretto

  @Input() colorType: 'blue' | 'red' = 'blue';
  removedBars: Bar[] = []; // Elenco delle barre rimosse
  index:number=1;

  getBarColor(index: number, colorType: 'blue' | 'red'): string {
    // Gradiente dal chiaro allo scuro
    let startColor, endColor;

    if (colorType === 'blue') {
      startColor = { r: 76, g: 96, b: 179 }; // lightblue
      endColor = { r: 0, g: 0, b:139 }; // darkblue
    } else {
      startColor = { r: 139, g: 0, b: 0 }; // light pink
      endColor = { r: 139, g: 0,b: 0 }; // darkred
    }

    const fraction = index / (this.bars.length - 1);

    const r = Math.floor(startColor.r + fraction * (endColor.r - startColor.r));
    const g = Math.floor(startColor.g + fraction * (endColor.g - startColor.g));
    const b = Math.floor(startColor.b + fraction * (endColor.b - startColor.b));

    return `rgb(${r}, ${g}, ${b})`;
  }

  hideBar(bar: Bar) {
         this.audioService.playSound('assets/music/vanish.wav');

     bar.visible = false; // Imposta visibile su false
 this.removedBars.push(bar);
   }
  constructor(private audioService: AudioService) { }

  // Funzione per rimuovere una barra
  // removeBar(index: number) {
  //   const removedBar = this.bars.splice(index, 1)[0];
  //   this.removedBars.push(removedBar);
  // }

  // Funzione per ripristinare l'ultima barra rimossa
  restoreLastRemovedBar() {
    if (this.removedBars.length > 0) {

       console.log(this.removedBars.length)
      this.removedBars[this.removedBars.length-1].visible=true;
      this.removedBars.pop();
    }
  }

}
