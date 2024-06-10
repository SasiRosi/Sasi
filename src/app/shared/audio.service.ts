import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private backgroundMusic: HTMLAudioElement = new Audio('assets/music/background-music.mp3');
  
  constructor() { }

  
  play: Boolean = true;
  startBackgroundMusic() {

    if (this.play == true) {
    
      // this.backgroundMusic.loop = true;
      this.backgroundMusic.volume = 0.6; // Volume di default (50%)
      this.backgroundMusic.play().catch(error => {
        console.error('Background music failed to play:', error);
      });
    this.play = false;
    }

    else {
      this.backgroundMusic.pause();
      this.play = true;
    }
  }

  // stopBackgroundMusic() {
  //   this.backgroundMusic.pause();
  //   this.backgroundMusic.currentTime = 0;
  // }

  playSound(soundFilePath: string) {
    const sound = new Audio(soundFilePath);
   
      sound.play().catch(error => {
        console.error('Sound effect failed to play:', error);
      });
      
    
  }

  playSound2(soundFilePath: string, played: Boolean) {

    const sound = new Audio(soundFilePath);
    if (played == false) {
      sound.play().catch(error => {
        console.error('Sound effect failed to play:', error);
      });
    }
    else{
      sound.pause();
    }
    
  }

  stopSound(soundFilePath: string) {
    const sound = new Audio(soundFilePath);
    sound.pause();
  }
  
  

}
