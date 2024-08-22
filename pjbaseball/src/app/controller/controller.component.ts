import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controller',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {
// Valores de tarjeta de jugador  
  pName: string = '';
  pNumber: string = '';
  pVel: string = '';
  tThrows: string = '';
  strikes: string = '';
  balls: string = '';

// Valores de marcador
  gameRuns: number = 0;
  counter: number = 1;
  counterTeam2: number = 0;
  counterTeam1: number = 0;

  gameBall: string = '';

  gameStrike: string = '';
  GS: number = parseInt(this.gameStrike, 10);

  GO: number = 0;
  gameOut: string = this.GO.toString();

  sendText() {
    if (window.opener) {
      const text = {
        name: this.pName,
        number: this.pNumber,
        speed: this.pVel,
        throws: this.tThrows,
        strike: this.strikes,
        ball: this.balls,
      };
      window.opener.postMessage({ type: 'playerData', payload: text }, '*');
    } else {
      console.error('No opener window found');
    }
  }
  sendData(){
    if(this.GS == 3){
      this.GO = this.GO+1;
      this.GS = 0;
    }
    if (window.opener) {
      const data = {

        gBall: this.gameBall,
        gStrike: this.gameStrike,
        gOut: this.gameOut
      };
      window.opener.postMessage({ type: 'gameData', payload: data }, '*'); 
    } else {
      console.error('No opener window found');
    }

  }

  next() {
    this.counter = this.counter +1;
    if(this.counter>=21){
      this.counter == 1;
    }

    if(this.counter%2 == 0){
      this.counterTeam2 = this.counterTeam2 + this.gameRuns;
    } else {
      this.counterTeam1 = this.counterTeam1 + this.gameRuns;
    }
    
    if (window.opener) {
    const score = {
      gRuns: this.gameRuns,
      count: this.counter
    };
    window.opener.postMessage({ type: 'gameScore', payload: score }, '*'); 
  } else {
    console.error('No opener window found');
  }

  }
  back() {
    this.counter = this.counter -1;
    if(this.counter<=0){
      this.counter == 20;
    }

    if(this.counter%2 == 0){
      this.counterTeam2 = this.counterTeam2 + this.gameRuns;
    } else {
      this.counterTeam1 = this.counterTeam1 + this.gameRuns;
    }


    if (window.opener) {
      const score = {
        gRuns: this.gameRuns,
        count: this.counter
      };
      window.opener.postMessage({ type: 'gameScore', payload: score }, '*'); 
    } else {
      console.error('No opener window found');
    }
  }
}
